// NotificationManager.swift - Manages daily name notifications
import Foundation
import Combine
import UserNotifications

class NotificationManager: ObservableObject {
    static let shared = NotificationManager()
    
    @Published var notificationsEnabled: Bool {
        didSet {
            UserDefaults.standard.set(notificationsEnabled, forKey: "notificationsEnabled")
            if notificationsEnabled {
                scheduleDailyNotifications()
            } else {
                cancelAllNotifications()
            }
        }
    }
    
    @Published var notificationTime: Date {
        didSet {
            UserDefaults.standard.set(notificationTime, forKey: "notificationTime")
            if notificationsEnabled {
                scheduleDailyNotifications()
            }
        }
    }
    
    private init() {
        self.notificationsEnabled = UserDefaults.standard.bool(forKey: "notificationsEnabled")
        if let savedTime = UserDefaults.standard.object(forKey: "notificationTime") as? Date {
            self.notificationTime = savedTime
        } else {
            // Default to 9:00 AM
            let calendar = Calendar.current
            self.notificationTime = calendar.date(from: DateComponents(hour: 9, minute: 0)) ?? Date()
        }
    }
    
    // Request notification permission
    func requestPermission(completion: @escaping (Bool) -> Void) {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
            DispatchQueue.main.async {
                if granted {
                    self.notificationsEnabled = true
                    self.scheduleDailyNotifications()
                }
                completion(granted)
            }
        }
    }
    
    // Check current notification permission status
    func checkPermissionStatus(completion: @escaping (Bool) -> Void) {
        UNUserNotificationCenter.current().getNotificationSettings { settings in
            DispatchQueue.main.async {
                completion(settings.authorizationStatus == .authorized)
            }
        }
    }
    
    // Schedule daily notifications for the next 30 days
    func scheduleDailyNotifications() {
        cancelAllNotifications()
        
        let allNames = AllahNamesDatabase.all.filter { $0.hasContent }
        let calendar = Calendar.current
        let timeComponents = calendar.dateComponents([.hour, .minute], from: notificationTime)
        
        // Schedule for the next 30 days
        for dayOffset in 0..<30 {
            // Cycle through names (99 names, so use modulo to loop)
            let nameIndex = dayOffset % allNames.count
            let name = allNames[nameIndex]
            
            // Create notification content
            let content = UNMutableNotificationContent()
            content.title = "Today's Name: \(name.transliteration)"
            content.body = "\(name.arabic) - \(name.meaning)\n\nTap to explore this beautiful name of Allah."
            content.sound = .default
            content.badge = 1
            content.userInfo = ["nameId": name.nameId]
            
            // Set trigger for specific time
            var dateComponents = DateComponents()
            dateComponents.hour = timeComponents.hour
            dateComponents.minute = timeComponents.minute
            dateComponents.day = calendar.component(.day, from: calendar.date(byAdding: .day, value: dayOffset, to: Date())!)
            dateComponents.month = calendar.component(.month, from: calendar.date(byAdding: .day, value: dayOffset, to: Date())!)
            dateComponents.year = calendar.component(.year, from: calendar.date(byAdding: .day, value: dayOffset, to: Date())!)
            
            let trigger = UNCalendarNotificationTrigger(dateMatching: dateComponents, repeats: false)
            
            // Create request
            let request = UNNotificationRequest(
                identifier: "dailyName_\(dayOffset)",
                content: content,
                trigger: trigger
            )
            
            // Schedule notification
            UNUserNotificationCenter.current().add(request) { error in
                if let error = error {
                    print("⚠️ Error scheduling notification: \(error.localizedDescription)")
                }
            }
        }
        
        print("✅ Scheduled 30 daily name notifications")
    }
    
    // Cancel all scheduled notifications
    func cancelAllNotifications() {
        UNUserNotificationCenter.current().removeAllPendingNotificationRequests()
        print("🗑️ Cancelled all notifications")
    }
    
    // Get count of pending notifications (for debugging)
    func getPendingNotificationCount(completion: @escaping (Int) -> Void) {
        UNUserNotificationCenter.current().getPendingNotificationRequests { requests in
            DispatchQueue.main.async {
                completion(requests.count)
            }
        }
    }
}

