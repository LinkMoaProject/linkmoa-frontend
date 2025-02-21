import { Square } from "lucide-react";
import Link from "next/link";

export function SiteIconView() {
  return (
    <Link href="" className="block w-32">
      <Square size={128} fill="lightgray" stroke="none" className="mx-auto" />
      <p className="text-sm text-center -mt-2">사이트 이름</p>
    </Link>
  );
}
