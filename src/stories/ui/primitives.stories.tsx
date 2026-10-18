import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Heading } from "@/components/ui/heading";
import { IconButton } from "@/components/ui/icon-button";
import { ImageFrame } from "@/components/ui/image-frame";
import { LinkButton } from "@/components/ui/link-button";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Text } from "@/components/ui/text";
import { ArrowRight } from "lucide-react";

const meta = { title: "UI/Primitives", tags: ["autodocs"] } satisfies Meta;
export default meta;
type Story = StoryObj;
export const AllPrimitives: Story = { render: () => <Container className="py-10"><Stack className="gap-8"><Section className="py-0"><Badge>Example badge</Badge><Heading className="mt-4">A reusable heading</Heading><Text className="mt-3">Supporting content gives the primitive a realistic context.</Text></Section><div className="flex flex-wrap gap-3"><Button>Button</Button><Button variant="secondary">Secondary</Button><LinkButton href="#">Link button <ArrowRight size={15} /></LinkButton><IconButton aria-label="Example icon">+</IconButton></div><Grid className="md:grid-cols-2"><Card className="p-6">Card content</Card><ImageFrame image={{ src: "/images/professional/projects/vidbrain.svg", alt: "Example abstract project art" }} /></Grid></Stack></Container> };
