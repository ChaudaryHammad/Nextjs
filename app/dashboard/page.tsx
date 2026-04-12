// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Dashboard</h1>

    
      <Link href="/">Go to Home</Link>
    </div>
  );
}