import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-2xl font-bold text-red-500">
        <Button variant="default" size="lg">
          Click Me
        </Button>
      </p>
    </div>
  );
}
