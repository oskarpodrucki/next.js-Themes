"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

export default function SwitchTheme() {
  
    const { setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" onCheckedChange={setTheme()}/>
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
