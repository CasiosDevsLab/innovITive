import { Button } from "./button";

export interface Article {
    title: string;
    subtitle?: string;
    description: string;
    img?: string
    btn?: Button;
}