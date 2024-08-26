import IconFB from "@/images/icon-facebook.svg?react";
import IconTwitter from "@/images/icon-twitter.svg?react";
import IconIg from "@/images/icon-instagram.svg?react"
import IconUp from "@/images/icon-up.svg?react";
import IconYoutube from "@/images/icon-youtube.svg?react"
import IconDown from "@/images/icon-down.svg?react";

export default function Top4Elms() {
    return (
        <div className="md:grid flex flex-col grid-cols-4 gap-8">
            <div className="rounded-md overflow-hidden pt-1 bg-p_Fb">
                <div className="bg-light_card_bg_Light_Grayish_Blue dark:bg-dark_card_bg_Dark_Desaturated_Blue flex flex-col items-center py-6 gap-6">
                    <div className="flex justify-center items-center gap-2 w-full">
                        <IconFB />
                        <span className="text-light_text_Dark_Grayish_Blue text-sm dark:text-dark_text_Desaturated_Blue">
                            @nathanf
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 w-full items-center">
                        <p className="text-light_text_Very_Dark_Blue font-bold text-[3.5rem] text-center leading-[3rem] dark:text-white">
                            1987
                        </p>
                        <span className="text-light_text_Dark_Grayish_Blue tracking-[0.25rem] text-sm dark:text-dark_text_Desaturated_Blue">
                            FOLLOWERS
                        </span>
                    </div>
                    <p className="text-xs text-p_Lime_Green flex items-center font-bold gap-1">
                        <IconUp /> 12 Today
                    </p>
                </div>
            </div>
            <div className="rounded-md overflow-hidden pt-1 bg-p_Twitter">
<div className="bg-light_card_bg_Light_Grayish_Blue dark:bg-dark_card_bg_Dark_Desaturated_Blue flex flex-col items-center py-6 gap-6">
                    <div className="flex justify-center items-center gap-2 w-full">
                        <IconTwitter />
                        <span className="text-light_text_Dark_Grayish_Blue text-sm dark:text-dark_text_Desaturated_Blue">
                            @nathanf
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 w-full items-center">
                        <p className="text-light_text_Very_Dark_Blue font-bold text-[3.5rem] text-center leading-[3rem] dark:text-white">
                            1044
                        </p>
                        <span className="text-light_text_Dark_Grayish_Blue tracking-[0.25rem] text-sm dark:text-dark_text_Desaturated_Blue">
                            FOLLOWERS
                        </span>
                    </div>
                    <p className="text-xs text-p_Lime_Green flex items-center font-bold gap-1">
                        <IconUp /> 99 Today
                    </p>
                </div>
            </div>
            <div className="rounded-md overflow-hidden pt-1 bg-gradient-to-r from-p_Ig1 to-p_Ig2">
<div className="bg-light_card_bg_Light_Grayish_Blue dark:bg-dark_card_bg_Dark_Desaturated_Blue flex flex-col items-center py-6 gap-6">
                    <div className="flex justify-center items-center gap-2 w-full">
                        <IconIg />
                        <span className="text-light_text_Dark_Grayish_Blue text-sm dark:text-dark_text_Desaturated_Blue">
                            @realnathanf
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 w-full items-center">
                        <p className="text-light_text_Very_Dark_Blue font-bold text-[3.5rem] text-center leading-[3rem] dark:text-white">
                            11k
                        </p>
                        <span className="text-light_text_Dark_Grayish_Blue tracking-[0.25rem] text-sm dark:text-dark_text_Desaturated_Blue">
                            FOLLOWERS
                        </span>
                    </div>
                    <p className="text-xs text-p_Lime_Green flex items-center font-bold gap-1">
                        <IconUp /> 1099 Today
                    </p>
                </div>
            </div>
            <div className="rounded-md overflow-hidden pt-1 bg-p_YouTube">
                <div className="bg-light_card_bg_Light_Grayish_Blue dark:bg-dark_card_bg_Dark_Desaturated_Blue flex flex-col items-center py-6 gap-6">
                    <div className="flex justify-center items-center gap-2 w-full">
                        <IconYoutube />
                        <span className="text-light_text_Dark_Grayish_Blue text-sm dark:text-dark_text_Desaturated_Blue">
                            Nathan F.
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 w-full items-center">
                        <p className="text-light_text_Very_Dark_Blue font-bold text-[3.5rem] text-center leading-[3rem] dark:text-white">
                            8239
                        </p>
                        <span className="text-light_text_Dark_Grayish_Blue tracking-[0.25rem] text-sm dark:text-dark_text_Desaturated_Blue">
                            SUBSCRIBERS
                        </span>
                    </div>
                    <p className="text-xs text-p_Bright_Red flex items-center font-bold gap-1">
                        <IconDown /> 144 Today
                    </p>
                </div>
            </div>
        </div>
    );
}
