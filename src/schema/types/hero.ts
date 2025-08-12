export const heroTypeDefs = `
    type Hero {
        id: ID!
        class_name: String!
        name: String!
        description: HeroDescription
        recommended_upgrades: [Item]
        recommended_ability_order: [String]
        player_selectable: Boolean
        disabled: Boolean
        in_development: Boolean
        needs_testing: Boolean
        assigned_players_only: Boolean
        limited_testing: Boolean
        complexity: Int
        skin: Int
        images: HeroImages
        items: HeroItems
        starting_stats: HeroStartingStats
    }

    type HeroDescription {
        lore: String
    }
    
    type HeroImages {
        icon_hero_card: String
        icon_hero_card_webp: String
        icon_image_small: String
        icon_image_small_webp: String
        minimap_image: String
        minimap_image_webp: String
        selection_image: String
        selection_image_webp: String
        top_bar_image: String
        top_bar_image_webp: String
    }

    type HeroItems {
        ability_climb_rope: Item
        ability_innate1: Item
        ability_innate2: Item
        ability_innate3: Item
        ability_jump: Item
        ability_mantle: Item
        ability_slide: Item
        ability_zip_line: Item
        ability_zip_line_boost: Item
        signature1: Item
        signature2: Item
        signature3: Item
        signature4: Item
        weapon_melee: Item
        weapon_primary: Item
        weapon_secondary: Item
    }

    type HeroStartingStats {
        max_move_speed: HeroStartingStatInfo
        sprint_speed: HeroStartingStatInfo
        crouch_speed: HeroStartingStatInfo
        move_acceleration: HeroStartingStatInfo
        light_melee_damage: HeroStartingStatInfo
        heavy_melee_damage: HeroStartingStatInfo
        max_health: HeroStartingStatInfo
        weapon_power: HeroStartingStatInfo
        reload_speed: HeroStartingStatInfo
        weapon_power_scale: HeroStartingStatInfo
        proc_build_up_rate_scale: HeroStartingStatInfo
        stamina: HeroStartingStatInfo
        base_health_regen: HeroStartingStatInfo
        stamina_regen_per_second: HeroStartingStatInfo
        ability_resource_max: HeroStartingStatInfo
        ability_resource_regen_per_second: HeroStartingStatInfo
        crit_damage_received_scale: HeroStartingStatInfo
        tech_duration: HeroStartingStatInfo
        tech_range: HeroStartingStatInfo
    }

    type HeroStartingStatInfo {
        value: Float
        display_stat_name: String
    }
`;

export type Hero = {
	id: number;
	class_name: string;
	name: string;
	items: HeroItems;
};

/*
    values from REST API are Item class_names
    resolve to Item objects
*/
type HeroItems = {
	ability_climb_rope: string;
	ability_innate1: string;
	ability_innate2: string;
	ability_innate3: string;
	ability_jump: string;
	ability_mantle: string;
	ability_slide: string;
	ability_zip_line: string;
	ability_zip_line_boost: string;
	signature1: string;
	signature2: string;
	signature3: string;
	signature4: string;
	weapon_melee: string;
	weapon_primary: string;
	weapon_secondary: string;
};
