export interface VideoLogItem {
    id: string;
    platform: string;
    title: string;
    thumb_url: string;
    url: string;
    duration?: number;
    published?: Date;
    video_url: string;
    embed_code: string;
}
