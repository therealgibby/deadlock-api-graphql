export const itemTypeDefs = `
    interface Item {
        id: ID!
        class_name: String!
        name: String
        start_trained: Boolean
        image: String
        image_webp: String
        hero: Hero
        heroes: [Hero]
        type: String
        description: ItemDescription
        update_time: Int
    }

    interface ItemProperties {
        AbilityCastDelay: ItemPropertyInfo
        AbilityCastRange: ItemPropertyInfo
        AbilityChannelTime: ItemPropertyInfo
        AbilityCharges: ItemPropertyInfo
        AbilityCooldown: ItemPropertyInfo
        AbilityCooldownBetweenCharge: ItemPropertyInfo
        AbilityDuration: ItemPropertyInfo
        AbilityPostCastDuration: ItemPropertyInfo
        AbilityResourceCost: ItemPropertyInfo
        AbilityUnitTargetLimit: ItemPropertyInfo
        ActivateTime: ItemPropertyInfo
        ActiveRadius: ItemPropertyInfo
        ActiveReloadPercent: ItemPropertyInfo
        AirControlPercent: ItemPropertyInfo
        AirJumpVerticalSpeedPercent: ItemPropertyInfo
        AirMoveIncreasePercent: ItemPropertyInfo
        ArmingTime: ItemPropertyInfo
        AttackConeAngle: ItemPropertyInfo
        BackwardsShotDelayTime: ItemPropertyInfo
        BarrierDuration: ItemPropertyInfo
        BaseAttackDamagePercent: ItemPropertyInfo
        BonusClipSizePercent: ItemPropertyInfo
        BonusFireRate: ItemPropertyInfo
        BonusHealthRegen: ItemPropertyInfo
        BonusMoveSpeed: ItemPropertyInfo
        BonusPerChain: ItemPropertyInfo
        BonusSprintSpeed: ItemPropertyInfo
        BuffDuration: ItemPropertyInfo
        BuildUpDuration: ItemPropertyInfo
        BuildUpPerShot: ItemPropertyInfo
        BulletArmorReduction: ItemPropertyInfo
        BulletLifestealPercent: ItemPropertyInfo
        BulletResist: ItemPropertyInfo
        BulletResistReduction: ItemPropertyInfo
        BulletSplitShot: ItemPropertyInfo
        CaptureRadius: ItemPropertyInfo
        ChainCount: ItemPropertyInfo
        ChainRadius: ItemPropertyInfo
        ChainTickRate: ItemPropertyInfo
        ChannelMoveSpeed: ItemPropertyInfo
        CloseRangeBonusDamageRange: ItemPropertyInfo
        CloseRangeBonusWeaponPower: ItemPropertyInfo
        CombatBarrier: ItemPropertyInfo
        Damage: ItemPropertyInfo
        DamageHeight: ItemPropertyInfo
        DamagePerChain: ItemPropertyInfo
        DampingFactor: ItemPropertyInfo
        DebuffDuration: ItemPropertyInfo
        DirectionVariance: ItemPropertyInfo
        DotHealthPercent: ItemPropertyInfo
        DPS: ItemPropertyInfo
        EndRadius: ItemPropertyInfo
        ExplodeDamage: ItemPropertyInfo
        ExplodeRadius: ItemPropertyInfo
        ExplosionDamage: ItemPropertyInfo
        ExplosionRadius: ItemPropertyInfo
        FireRateBonus: ItemPropertyInfo
        FireRateSlow: ItemPropertyInfo
        FullInvisDistance: ItemPropertyInfo
        GroundDashReductionPercent: ItemPropertyInfo
        GrowthPerMeter: ItemPropertyInfo
        HealAmount: ItemPropertyInfo
        HealAmpReceivePenaltyPercent: ItemPropertyInfo
        HealAmpRegenPenaltyPercent: ItemPropertyInfo
        HealInterval: ItemPropertyInfo
        HealRadius: ItemPropertyInfo
        HealthSteal: ItemPropertyInfo
        HeightOffGround: ItemPropertyInfo
        ImmunityDuration: ItemPropertyInfo
        ImpactDamage: ItemPropertyInfo
        ImpactHeight: ItemPropertyInfo
        InitialWidth: ItemPropertyInfo
        Interval: ItemPropertyInfo
        InvisAlertWhenFading: ItemPropertyInfo
        InvisCancelOnDamage: ItemPropertyInfo
        InvisFadeToDuration: ItemPropertyInfo
        InvisMoveSpeedMod: ItemPropertyInfo
        LiftHeight: ItemPropertyInfo
        LingerDuration: ItemPropertyInfo
        LowHealthThreshold: ItemPropertyInfo
        MaxFallSpeed: ItemPropertyInfo
        MaxSlowPercent: ItemPropertyInfo
        MaxStacks: ItemPropertyInfo
        MinAimAngle: ItemPropertyInfo
        MinEffectiveness: ItemPropertyInfo
        ModelScale: ItemPropertyInfo
        MovementSpeedBonusDuration: ItemPropertyInfo
        MovementSpeedSlow: ItemPropertyInfo
        MoveSpeedMax: ItemPropertyInfo
        MoveWhileShootingSpeedPenaltyReductionPercent: ItemPropertyInfo
        MoveWhileZoomedSpeedPenaltyReductionPercent: ItemPropertyInfo
        ProcChance: ItemPropertyInfo
        ProcCooldown: ItemPropertyInfo
        Radius: ItemPropertyInfo
        RespawnDelay: ItemPropertyInfo
        RespawnHealthPercent: ItemPropertyInfo
        RevealOnDamageDuration: ItemPropertyInfo
        RevealOnSpottedDuration: ItemPropertyInfo
        RicochetDamagePercent: ItemPropertyInfo
        RicochetRadius: ItemPropertyInfo
        SilenceDuration: ItemPropertyInfo
        SkipFrames: ItemPropertyInfo
        SlideScale: ItemPropertyInfo
        SlowDuration: ItemPropertyInfo
        SlowPercent: ItemPropertyInfo
        SlowResistancePercent: ItemPropertyInfo
        SpiritStealDuration: ItemPropertyInfo
        SpottedRadius: ItemPropertyInfo
        SpreadAngleDegrees: ItemPropertyInfo
        SpreadDuration: ItemPropertyInfo
        Stamina: ItemPropertyInfo
        StaminaCooldownReduction: ItemPropertyInfo
        StartRadius: ItemPropertyInfo
        StealDuration: ItemPropertyInfo
        StunDuration: ItemPropertyInfo
        TechArmorDamageReduction: ItemPropertyInfo
        TechPower: ItemPropertyInfo
        TechResist: ItemPropertyInfo
        TetherDuration: ItemPropertyInfo
        TetherRadius: ItemPropertyInfo
        TickRate: ItemPropertyInfo
        TossSpeed: ItemPropertyInfo
        TrackingSpeed: ItemPropertyInfo
        TurretAttackDelay: ItemPropertyInfo
        TurretAttackRange: ItemPropertyInfo
        TurretDeployTime: ItemPropertyInfo
        TurretLifetime: ItemPropertyInfo
        VerticalDifferenceTolerance: ItemPropertyInfo
        WeaponDamageBonusDuration: ItemPropertyInfo
        WeaponPower: ItemPropertyInfo
    }

    type ItemPropertyInfo {
        can_set_token_override: Boolean
        css_class: String
        disable_value: String
        display_units: String
        icon: String
        label: String
        postfix: String
        prefix: String
        provided_property_type: String
        scale_function: ScaleFunction
        usage_flags: [String]
        value: String
    }

    type ScaleFunction {
        class_name: String
        subclass_name: String
        specific_stat_scale_type: String
    }

    type ItemDescription {
        desc: String
        quip: String
        t1_desc: String
        t2_desc: String
        t3_desc: String
    }

    interface ItemWeaponInfo {
        bullet_speed_curve: BulletSpeedCurve
    }
`;

export type Item = {
	id: string;
	class_name: string;
	name: string;
	type: string;
	hero?: number;
	heroes?: number[];
};
