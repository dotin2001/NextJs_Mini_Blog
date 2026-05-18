import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex h-9 items-center gap-2 rounded-md border border-[#ece8f6] bg-white px-3">
      <Search className="h-3.5 w-3.5 text-[#9a97a8]" />
      <input
        className="w-full bg-transparent text-[11px] text-[#44444d] outline-none placeholder:text-[#9a97a8]"
        placeholder="Search articles or categories"
      />
    </div>
  );
}
