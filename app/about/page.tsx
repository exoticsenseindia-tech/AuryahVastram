import { Story } from "@/components/about/Story";
import { Leadership } from "@/components/about/Leadership";
import { Vision } from "@/components/about/Vision";

export default function About() {
    return (
        <div className="flex flex-col">
            <Story />
            <Leadership />
            <Vision />
        </div>
    );
}
