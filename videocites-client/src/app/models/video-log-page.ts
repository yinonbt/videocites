import { VideoLogItem } from './video-log-item';

export interface VideoLogPage {
    isLast: boolean;
    length: number;
    start: number;
    totalPages: number;
    videoLogItems: VideoLogItem[];
}
