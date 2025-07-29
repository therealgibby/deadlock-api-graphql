const typeDefs: string = `
    type Query {
        hero(id: ID, name: String, class_name: String): Hero
        heroes(limit: Int, offset: Int): [Hero]
        item(id: ID, name: String, class_name: String): Item
        items(limit: Int, offset: Int): [Item]
    }

    type Item {
        id: ID!
        class_name: String!
        name: String
        start_trained: Boolean
        image: String
        image_webp: String
        hero: Int
        heroes: [Int]
        properties: ItemProperties
        weapon_info: ItemWeaponInfo
        type: String
    }

    type ItemProperties {
        AbilityCastDelay: ItemPropertyInfo
        AbilityCastRange: ItemPropertyInfo
        AbilityChannelTime: ItemPropertyInfo
        AbilityCharges: ItemPropertyInfo
        AbilityCooldown: ItemPropertyInfo
        AbilityCooldownBetweenCharges: ItemPropertyInfo
        AbilityDuration: ItemPropertyInfo
        AbilityPostCastDuration: ItemPropertyInfo
        AbilityResourceCost: ItemPropertyInfo
        AbilityUnitTargetLimit: ItemPropertyInfo
        ChannelMoveSpeed: ItemPropertyInfo
        TechPower: ItemPropertyInfo
        WeaponPower: ItemPropertyInfo
    }

    type ItemPropertyInfo {
        value: String
        can_set_token_override: Boolean
        provided_property_type: String
        css_class: String
        disable_value: String
        scale_function: ScaleFunctionInfo
        label: String
        postfix: String
        icon: String
    }

    type ScaleFunctionInfo {
        class_name: String
        subclass_name: String
        specific_stat_scale_type: String
    }

    type ItemWeaponInfo {
        can_zoom: Boolean
        bullet_damage: Float
        bullet_gravity_scale: Float
        bullet_inherit_shooter_velocity_scale: Float
        bullet_lifetime: Float
        bullet_radius: Float
        bullet_reflect_amount: Float
        bullet_reflect_scale: Float
        bullet_whiz_distance: Float
        burst_shot_cooldown: Float
        crit_bonus_end: Float
        crit_bonus_end_range: Float
        crit_bonus_start: Float
        crit_bonus_start_range: Float
        cycle_time: Float
        damage_falloff_bias: Float
        damage_falloff_end_range: Float
        damage_falloff_end_scale: Float
        damage_falloff_start_range: Float
        damage_falloff_start_scale: Float
        horizontal_punch: Float
        range: Float
        recoil_recovery_speed: Float
        recoil_shot_index_recovery_time_factor: Float
        recoil_speed: Float
        reload_move_speed: Float
        scatter_yaw_scale: Float
        aiming_shot_spread_penalty: [Float]
        standing_shot_spread_penalty: [Float]
        shoot_move_speed_percent: Float
        shoot_spread_penalty_decay: Float
        shoot_spread_penalty_decay_delay: Float
        shoot_spread_penalty_per_shot: Float
        shooting_up_spread_penalty: Float
        vertical_punch: Float
        zoom_move_speed_percent: Float
        bullets: Int
        burst_shot_count: Int
        clip_size: Int
        reload_duration: Float
        bullet_speed_curve: BulletSpeedCurve
        horizontal_recoil: HorizontalRecoil
    }

    type BulletSpeedCurve {
        spline: [Spline]
        domain_maxs: [Int]
        domain_mins: [Int]
    }

    type Spline {
        slope_incoming: Int
        slope_outgoing: Int
        x: Int
        y: Int
    }

    type HorizontalRecoil {
        range: [Float]
        burst_exponent: Float
    }

    type Hero {
        id: ID!
        class_name: String!
        name: String!
        description: HeroDescription
        recommended_upgrades: [String]
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

type Hero = {
	id: number;
	class_name: string;
	name: string;
	description: {
		lore: string;
	};
	recommended_upgrades: string[];
	recommended_ability_order: string[];
	player_selectable: boolean;
	disabled: boolean;
	in_development: boolean;
	needs_testing: boolean;
	assigned_players_only: boolean;
	limited_testing: boolean;
	complexity: number;
	skin: number;
	images: HeroImages;
	starting_stats: HeroStartingStats;
};

type HeroImages = {
	icon_hero_card: string;
	icon_hero_card_webp: string;
	icon_image_small: string;
	icon_image_small_webp: string;
	minimap_image: string;
	minimap_image_webp: string;
	selection_image: string;
	selection_image_webp: string;
	top_bar_image: string;
	top_bar_image_webp: string;
};

type HeroStartingStats = {
	max_move_speed: HeroStartingStatInfo;
	sprint_speed: HeroStartingStatInfo;
	crouch_speed: HeroStartingStatInfo;
	move_acceleration: HeroStartingStatInfo;
	light_melee_damage: HeroStartingStatInfo;
	heavy_melee_damage: HeroStartingStatInfo;
	max_health: HeroStartingStatInfo;
	weapon_power: HeroStartingStatInfo;
	reload_speed: HeroStartingStatInfo;
	weapon_power_scale: HeroStartingStatInfo;
	proc_build_up_rate_scale: HeroStartingStatInfo;
	stamina: HeroStartingStatInfo;
	base_health_regen: HeroStartingStatInfo;
	stamina_regen_per_second: HeroStartingStatInfo;
	ability_resource_max: HeroStartingStatInfo;
	ability_resource_regen_per_second: HeroStartingStatInfo;
	crit_damage_received_scale: HeroStartingStatInfo;
	tech_duration: HeroStartingStatInfo;
	tech_range: HeroStartingStatInfo;
};

type HeroStartingStatInfo = {
	value: number;
	display_stat_name: string;
};

type Item = {
	id: string;
	class_name: string;
	name: string;
	start_trained: boolean;
	image: string;
	image_webp: string;
	hero: number;
	heroes: [number];
	properties: ItemProperties;
	weapon_info: ItemWeaponInfo;
	type: string;
};

type ItemProperties = {
	AbilityCastDelay: ItemPropertyInfo;
	AbilityCastRange: ItemPropertyInfo;
	AbilityChannelTime: ItemPropertyInfo;
	AbilityCharges: ItemPropertyInfo;
	AbilityCooldown: ItemPropertyInfo;
	AbilityCooldownBetweenCharges: ItemPropertyInfo;
	AbilityDuration: ItemPropertyInfo;
	AbilityPostCastDuration: ItemPropertyInfo;
	AbilityResourceCost: ItemPropertyInfo;
	AbilityUnitTargetLimit: ItemPropertyInfo;
	ChannelMoveSpeed: ItemPropertyInfo;
	TechPower: ItemPropertyInfo;
	WeaponPower: ItemPropertyInfo;
};

type ItemPropertyInfo = {
	value: string;
	can_set_token_override: boolean;
	provided_property_type: string;
	css_class: string;
	disable_value: string;
	scale_function: ScaleFunctionInfo;
	label: string;
	postfix: string;
	icon: string;
};

type ScaleFunctionInfo = {
	class_name: String;
	subclass_name: String;
	specific_stat_scale_type: String;
};

type ItemWeaponInfo = {
	can_zoom: boolean;
	bullet_damage: number;
	bullet_gravity_scale: number;
	bullet_inherit_shooter_velocity_scale: number;
	bullet_lifetime: number;
	bullet_radius: number;
	bullet_reflect_amount: number;
	bullet_reflect_scale: number;
	bullet_whiz_distance: number;
	burst_shot_cooldown: number;
	crit_bonus_end: number;
	crit_bonus_end_range: number;
	crit_bonus_start: number;
	crit_bonus_start_range: number;
	cycle_time: number;
	damage_falloff_bias: number;
	damage_falloff_end_range: number;
	damage_falloff_end_scale: number;
	damage_falloff_start_range: number;
	damage_falloff_start_scale: number;
	horizontal_punch: number;
	range: number;
	recoil_recovery_speed: number;
	recoil_shot_index_recovery_time_factor: number;
	recoil_speed: number;
	reload_move_speed: number;
	scatter_yaw_scale: number;
	aiming_shot_spread_penalty: number[];
	standing_shot_spread_penalty: number[];
	shoot_move_speed_percent: number;
	shoot_spread_penalty_decay: number;
	shoot_spread_penalty_decay_delay: number;
	shoot_spread_penalty_per_shot: number;
	shooting_up_spread_penalty: number;
	vertical_punch: number;
	zoom_move_speed_percent: number;
	bullets: number;
	burst_shot_count: number;
	clip_size: number;
	reload_duration: number;
	bullet_speed_curve: BulletSpeedCurve;
	horizontal_recoil: HorizontalRecoil;
};

type BulletSpeedCurve = {
	spline: Spline[];
	domain_maxs: number[];
	domain_mins: number[];
};

type Spline = {
	slope_incoming: number;
	slope_outgoing: number;
	x: number;
	y: number;
};

type HorizontalRecoil = {
	range: number[];
	burst_exponent: number;
};

export default typeDefs;
export type { Hero, Item };
