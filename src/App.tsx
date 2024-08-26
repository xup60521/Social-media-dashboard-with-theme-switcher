import Overview from "./Overview";
import { useTheme } from "./ThemeProvider";
import Top4Elms from "./Top4Elms";

export default function App() {
    const { theme } = useTheme();
    return (
        <div
            data-testid="test-app"
            className={`w-full min-h-screen bg-light_bg_White font-inter dark:bg-dark_bg_Very_Dark_Blue flex justify-center ${
                theme === "dark" && "dark"
            }`}
        >
            <div className="h-[15rem] w-full absolute top-0 left-0 bg-light_bg_top_pattern_Very_Pale_Blue dark:bg-dark_bg_top_pattern_Very_Dark_Blue"></div>
            <main className="w-[min(90vw,70rem)] min-h-screen flex flex-col z-10 py-8 gap-12">
                <Header />
                <Top4Elms />
                <Overview />
            </main>
        </div>
    );
}

function Header() {
    const { theme, setTheme } = useTheme();
    function onChangeTheme() {
        setTheme(() => (theme === "dark" ? "light" : "dark"));
        localStorage.setItem("theme", (theme === "dark" ? "light" : "dark"))
    }
    return (
        <header className="flex md:flex-row flex-col items-center justify-between">
            <div className="flex flex-col md:w-fit w-full">
                <h1 className="text-light_text_Very_Dark_Blue dark:text-white text-2xl md:text-[1.95rem] font-bold">
                    Social Media Dashboard
                </h1>
                <p className="text-light_text_Dark_Grayish_Blue dark:text-dark_text_Desaturated_Blue">
                    Total Followers: 23,004
                </p>
            </div>
            <div className="md:hidden w-full border-t-[1px] border-light_text_Dark_Grayish_Blue my-4"></div>
            <div className="flex items-center md:w-fit w-full justify-between gap-4">
                <span className="text-light_text_Dark_Grayish_Blue dark:text-dark_text_Desaturated_Blue">
                    Dark Mode
                </span>
                <div
                    role="button"
                    className="rounded-full cursor-pointer w-12 bg-gradient-to-r from-toggle_dark1 to-toggle_dark2 h-6 relative px-1"
                    onClick={onChangeTheme}
                >
                    <div
                        className={`aspect-square h-[18px] cursor-pointer translate-y-[3px] rounded-full bg-white transition ${
                            theme === "light"
                                ? "translate-x-[22px]"
                                : "translate-x-0"
                        }`}
                    ></div>
                </div>
            </div>
        </header>
    );
}
