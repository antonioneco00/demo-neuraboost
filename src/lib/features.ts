import {
  AcademicCapIcon,
  CogIcon,
  CpuChipIcon,
} from "@heroicons/react/20/solid";
import { getTypedMessages } from "@/lib/messages";

export async function getFeatures() {
  const { items } = (await getTypedMessages()).home.sections.features;
  const icons = [CogIcon, AcademicCapIcon, CpuChipIcon];

  return items.map((feature, index) => ({
    name: feature.name,
    description: feature.description,
    icon: icons[index],
  }));
}
