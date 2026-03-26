import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz — Test Your Knowledge of Allah's 99 Names",
  description:
    "Test and strengthen your knowledge of the 99 Names of Allah through interactive quizzes. Match names to meanings and meanings to names. Track your progress with scores and streaks.",
  keywords: [
    "99 names of Allah quiz",
    "Asma ul Husna quiz",
    "test names of Allah",
    "learn Allah names",
    "Islamic quiz",
    "names of Allah game",
    "memorise 99 names",
  ],
  openGraph: {
    title: "Quiz — Test Your Knowledge of Allah's 99 Names",
    description:
      "Test and strengthen your knowledge of the 99 Names of Allah through interactive quizzes.",
    url: "/quiz",
  },
  alternates: {
    canonical: "/quiz",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
