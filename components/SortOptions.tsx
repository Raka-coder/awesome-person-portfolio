import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

interface SortOptionsProps {
  sortOrder: "oldest" | "newest";
  setSortOrder: (value: "oldest" | "newest") => void;
}

export function SortOptions({ sortOrder, setSortOrder }: SortOptionsProps) {
  return (
    <div className="mb-4 flex items-center space-x-4">
      <Label htmlFor="sortOrder" className="text-sm text-slate-400">
        Sort by:
      </Label>
      <Select
        value={sortOrder}
        onValueChange={(value) => setSortOrder(value as "oldest" | "newest")}
      >
        <SelectTrigger id="sortOrder" className="w-40 cursor-pointer">
          <SelectValue placeholder="Select sort order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="oldest">Oldest First</SelectItem>
          <SelectItem value="newest">Newest First</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
