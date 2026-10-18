import type { Meta, StoryObj } from "@storybook/react";
import { ModeSwitch } from "@/components/layout/mode-switch";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

const meta = { title: "Layout/Site components", tags: ["autodocs"] } satisfies Meta;
export default meta;
type Story = StoryObj;
export const Header: Story = { render: () => <SiteHeader /> };
export const ModeControl: Story = { render: () => <div className="p-8"><ModeSwitch /></div> };
export const MobileMenu: Story = { render: () => <div className="p-8"><MobileNavigation items={[{ label: "Work", href: "/#work" }, { label: "Connect", href: "/#connect" }]} /></div> };
export const Footer: Story = { render: () => <SiteFooter /> };
