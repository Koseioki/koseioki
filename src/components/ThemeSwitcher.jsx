import { useEffect, useState } from 'react';
import './ThemeSwitcher.css';

// Sun icon component
const SunIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

// Moon icon component
const MoonIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

function ThemeSwitcher() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isManuallySet, setIsManuallySet] = useState(false);

    useEffect(() => {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('darkMode');
        const savedIsManual = localStorage.getItem('darkModeManual') === 'true';

        if (savedTheme !== null) {
            const isDark = savedTheme === 'true';
            setIsDarkMode(isDark);
            setIsManuallySet(savedIsManual);
            document.body.classList.toggle('dark-mode', isDark);
            return;
        }

        // No saved preference, use system preference
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

        function updateTheme(e) {
            if (!isManuallySet) {
                const isDark = e.matches;
                setIsDarkMode(isDark);
                document.body.classList.toggle('dark-mode', isDark);
            }
        }

        // Apply initial theme
        updateTheme(darkModeQuery);

        // Listen for changes only if not manually set
        if (!savedIsManual) {
            darkModeQuery.addEventListener('change', updateTheme);
            return () => darkModeQuery.removeEventListener('change', updateTheme);
        }
    }, [isManuallySet]);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        setIsManuallySet(true);
        document.body.classList.toggle('dark-mode', newMode);

        // Save to localStorage
        localStorage.setItem('darkMode', newMode.toString());
        localStorage.setItem('darkModeManual', 'true');
    };
    return (


        <button className="theme-switcher" onClick={toggleDarkMode}>
            {isDarkMode ? (
                <>
                    <SunIcon /> Switch to Light Mode
                </>
            ) : (
                <>
                    <MoonIcon /> Switch to Dark Mode
                </>
            )}
        </button>
    )
}

export default ThemeSwitcher;
