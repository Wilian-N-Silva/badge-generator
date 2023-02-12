export enum BadgeStyle {
	PLASTIC = 'plastic',
	FLAT = 'flat',
	FLAT_SQUARE = 'flat-square',
	FOR_THE_BADGE = 'for-the-badge',
	SOCIAL = 'social',
}

export interface BadgeType {
	label?: string;
	labelColor?: string;
	logo?: string;
	logoColor?: string;
	style?: string;
	color?: string;
}

export interface BadgeProp {
	showUrl: boolean | false;
	badgeData?: BadgeType;
}
