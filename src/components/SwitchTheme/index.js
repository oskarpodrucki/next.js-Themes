"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function SwitchTheme() {
	const { setTheme, resolvedTheme } = useTheme();
	const [isDarkMode, setIsDarkMode] = useState(false); 

	useEffect(() => {
		setIsDarkMode(resolvedTheme === "dark");
	}, [resolvedTheme]);

	const handleToggle = () => {
		const newTheme = isDarkMode ? "light" : "dark";
		setTheme(newTheme); 
		setIsDarkMode(!isDarkMode); 
	};

	return (
		<div className='flex items-center space-x-2'>
			<Switch
				id='switch-theme'
				checked={isDarkMode} 
				onCheckedChange={handleToggle}
			/>
			<Label htmlFor='switch-theme'>Switch Theme</Label>
		</div>
	);
}
