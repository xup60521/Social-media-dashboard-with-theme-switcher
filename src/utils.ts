import IconFB from "@/images/icon-facebook.svg?react";
import IconTwitter from "@/images/icon-twitter.svg?react";
import IconIg from "@/images/icon-instagram.svg?react";
import IconYoutube from "@/images/icon-youtube.svg?react";

export const OverviewData = [
    {
        category: "Page Views",
        icon: IconFB,
        value: "87",
        offsetType: "up",
        offset: "3%",
    },
    {
        category: "Likes",
        icon: IconFB,
        value: "52",
        offsetType: "down",
        offset: "2%",
    },
    {
        category: "Likes",
        icon: IconIg,
        value: "5426",
        offsetType: "up",
        offset: "2257%",
    },
    {
        category: "Profile Views",
        icon: IconIg,
        value: "52k",
        offsetType: "up",
        offset: "1375%",
    },
    {
        category: "Retweets",
        icon: IconTwitter,
        value: "117",
        offsetType: "up",
        offset: "303%",
    },
    {
        category: "Likes",
        icon: IconTwitter,
        value: "507",
        offsetType: "up",
        offset: "553%",
    },
    {
        category: "Likes",
        icon: IconYoutube,
        value: "107",
        offsetType: "down",
        offset: "19%",
    },
    {
        category: "Total Views",
        icon: IconYoutube,
        value: "1407",
        offsetType: "down",
        offset: "12%",
    },
] as const;
