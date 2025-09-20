try {
  ;(() => {
    var kn = Object.defineProperty
    var Se = (e, t) => () => (e && (t = e((e = 0))), t)
    var Nn = (e, t) => {
      for (var a in t) kn(e, a, { get: t[a], enumerable: !0 })
    }
    var O = Se(() => {})
    var w = Se(() => {})
    var k = Se(() => {})
    var mt = {}
    Nn(mt, {
      A: () => Dn,
      ActionBar: () => Mn,
      AddonPanel: () => Un,
      Badge: () => ie,
      Bar: () => Fn,
      Blockquote: () => Hn,
      Button: () => re,
      ClipboardCode: () => Bn,
      Code: () => Gn,
      DL: () => zn,
      Div: () => Wn,
      DocumentWrapper: () => jn,
      EmptyTabContent: () => Ce,
      ErrorFormatter: () => Yn,
      FlexBar: () => Vn,
      Form: () => qn,
      H1: () => Kn,
      H2: () => Xn,
      H3: () => Qn,
      H4: () => Zn,
      H5: () => Jn,
      H6: () => ea,
      HR: () => ta,
      IconButton: () => le,
      Img: () => na,
      LI: () => aa,
      Link: () => Ie,
      ListItem: () => ra,
      Loader: () => oa,
      Modal: () => ia,
      OL: () => la,
      P: () => ca,
      Placeholder: () => sa,
      Pre: () => ua,
      ProgressSpinner: () => da,
      ResetWrapper: () => ma,
      ScrollArea: () => Oe,
      Separator: () => pa,
      Spaced: () => fa,
      Span: () => ha,
      StorybookIcon: () => ya,
      StorybookLogo: () => ba,
      SyntaxHighlighter: () => we,
      TT: () => ga,
      TabBar: () => Sa,
      TabButton: () => va,
      TabWrapper: () => Ea,
      Table: () => Ia,
      Tabs: () => xa,
      TabsState: () => Ra,
      TooltipLinkList: () => ke,
      TooltipMessage: () => Aa,
      TooltipNote: () => fe,
      UL: () => _a,
      WithTooltip: () => de,
      WithTooltipPure: () => Ta,
      Zoom: () => $a,
      codeCommon: () => Ca,
      components: () => Oa,
      createCopyToClipboardFunction: () => wa,
      default: () => Ln,
      getStoryHref: () => ka,
      interleaveSeparators: () => Na,
      nameSpaceClassNames: () => Pa,
      resetComponents: () => La,
      withReset: () => Da,
    })
    var Ln,
      Dn,
      Mn,
      Un,
      ie,
      Fn,
      Hn,
      re,
      Bn,
      Gn,
      zn,
      Wn,
      jn,
      Ce,
      Yn,
      Vn,
      qn,
      Kn,
      Xn,
      Qn,
      Zn,
      Jn,
      ea,
      ta,
      le,
      na,
      aa,
      Ie,
      ra,
      oa,
      ia,
      la,
      ca,
      sa,
      ua,
      da,
      ma,
      Oe,
      pa,
      fa,
      ha,
      ya,
      ba,
      we,
      ga,
      Sa,
      va,
      Ea,
      Ia,
      xa,
      Ra,
      ke,
      Aa,
      fe,
      _a,
      de,
      Ta,
      $a,
      Ca,
      Oa,
      wa,
      ka,
      Na,
      Pa,
      La,
      Da,
      Ne = Se(() => {
        O()
        w()
        k()
        ;((Ln = __STORYBOOK_COMPONENTS__),
          ({
            A: Dn,
            ActionBar: Mn,
            AddonPanel: Un,
            Badge: ie,
            Bar: Fn,
            Blockquote: Hn,
            Button: re,
            ClipboardCode: Bn,
            Code: Gn,
            DL: zn,
            Div: Wn,
            DocumentWrapper: jn,
            EmptyTabContent: Ce,
            ErrorFormatter: Yn,
            FlexBar: Vn,
            Form: qn,
            H1: Kn,
            H2: Xn,
            H3: Qn,
            H4: Zn,
            H5: Jn,
            H6: ea,
            HR: ta,
            IconButton: le,
            Img: na,
            LI: aa,
            Link: Ie,
            ListItem: ra,
            Loader: oa,
            Modal: ia,
            OL: la,
            P: ca,
            Placeholder: sa,
            Pre: ua,
            ProgressSpinner: da,
            ResetWrapper: ma,
            ScrollArea: Oe,
            Separator: pa,
            Spaced: fa,
            Span: ha,
            StorybookIcon: ya,
            StorybookLogo: ba,
            SyntaxHighlighter: we,
            TT: ga,
            TabBar: Sa,
            TabButton: va,
            TabWrapper: Ea,
            Table: Ia,
            Tabs: xa,
            TabsState: Ra,
            TooltipLinkList: ke,
            TooltipMessage: Aa,
            TooltipNote: fe,
            UL: _a,
            WithTooltip: de,
            WithTooltipPure: Ta,
            Zoom: $a,
            codeCommon: Ca,
            components: Oa,
            createCopyToClipboardFunction: wa,
            getStoryHref: ka,
            interleaveSeparators: Na,
            nameSpaceClassNames: Pa,
            resetComponents: La,
            withReset: Da,
          } = __STORYBOOK_COMPONENTS__))
      })
    O()
    w()
    k()
    O()
    w()
    k()
    O()
    w()
    k()
    var o = __REACT__,
      {
        Children: P,
        Component: rl,
        Fragment: me,
        Profiler: ol,
        PureComponent: ct,
        StrictMode: il,
        Suspense: ll,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: cl,
        act: sl,
        cloneElement: V,
        createContext: pe,
        createElement: m,
        createFactory: ul,
        createRef: st,
        forwardRef: M,
        isValidElement: H,
        lazy: dl,
        memo: ml,
        startTransition: pl,
        unstable_act: fl,
        useCallback: R,
        useContext: ve,
        useDebugValue: hl,
        useDeferredValue: yl,
        useEffect: B,
        useId: ut,
        useImperativeHandle: bl,
        useInsertionEffect: gl,
        useLayoutEffect: Ee,
        useMemo: j,
        useReducer: dt,
        useRef: z,
        useState: F,
        useSyncExternalStore: Sl,
        useTransition: vl,
        version: El,
      } = __REACT__
    Ne()
    O()
    w()
    k()
    var $l = __STORYBOOK_API__,
      {
        ActiveTabs: Cl,
        Consumer: Ol,
        ManagerContext: wl,
        Provider: kl,
        RequestResponseError: Nl,
        addons: xe,
        combineParameters: Pl,
        controlOrMetaKey: Ll,
        controlOrMetaSymbol: Dl,
        eventMatchesShortcut: Ml,
        eventToShortcut: Ul,
        experimental_MockUniversalStore: Fl,
        experimental_UniversalStore: Hl,
        experimental_getStatusStore: pt,
        experimental_getTestProviderStore: Bl,
        experimental_requestResponse: Gl,
        experimental_useStatusStore: ft,
        experimental_useTestProviderStore: zl,
        experimental_useUniversalStore: Wl,
        internal_fullStatusStore: jl,
        internal_fullTestProviderStore: Yl,
        internal_universalStatusStore: Vl,
        internal_universalTestProviderStore: ql,
        isMacLike: Kl,
        isShortcutTaken: Xl,
        keyToSymbol: Ql,
        merge: Zl,
        mockChannel: Jl,
        optionOrAltSymbol: ec,
        shortcutMatchesShortcut: tc,
        shortcutToHumanString: nc,
        types: Pe,
        useAddonState: Le,
        useArgTypes: ac,
        useArgs: rc,
        useChannel: ht,
        useGlobalTypes: oc,
        useGlobals: yt,
        useParameter: bt,
        useSharedState: ic,
        useStoryPrepared: lc,
        useStorybookApi: Re,
        useStorybookState: gt,
      } = __STORYBOOK_API__
    O()
    w()
    k()
    var mc = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: pc,
        AccessibilityIcon: St,
        AccessibilityIgnoredIcon: fc,
        AddIcon: hc,
        AdminIcon: yc,
        AlertAltIcon: bc,
        AlertIcon: gc,
        AlignLeftIcon: Sc,
        AlignRightIcon: vc,
        AppleIcon: Ec,
        ArrowBottomLeftIcon: Ic,
        ArrowBottomRightIcon: xc,
        ArrowDownIcon: Rc,
        ArrowLeftIcon: Ac,
        ArrowRightIcon: _c,
        ArrowSolidDownIcon: Tc,
        ArrowSolidLeftIcon: $c,
        ArrowSolidRightIcon: Cc,
        ArrowSolidUpIcon: Oc,
        ArrowTopLeftIcon: wc,
        ArrowTopRightIcon: kc,
        ArrowUpIcon: Nc,
        AzureDevOpsIcon: Pc,
        BackIcon: Lc,
        BasketIcon: Dc,
        BatchAcceptIcon: Mc,
        BatchDenyIcon: Uc,
        BeakerIcon: Fc,
        BellIcon: Hc,
        BitbucketIcon: Bc,
        BoldIcon: Gc,
        BookIcon: zc,
        BookmarkHollowIcon: Wc,
        BookmarkIcon: jc,
        BottomBarIcon: Yc,
        BottomBarToggleIcon: Vc,
        BoxIcon: qc,
        BranchIcon: Kc,
        BrowserIcon: Xc,
        ButtonIcon: Qc,
        CPUIcon: Zc,
        CalendarIcon: Jc,
        CameraIcon: es,
        CameraStabilizeIcon: ts,
        CategoryIcon: ns,
        CertificateIcon: as,
        ChangedIcon: rs,
        ChatIcon: os,
        CheckIcon: vt,
        ChevronDownIcon: is,
        ChevronLeftIcon: ls,
        ChevronRightIcon: cs,
        ChevronSmallDownIcon: Et,
        ChevronSmallLeftIcon: ss,
        ChevronSmallRightIcon: us,
        ChevronSmallUpIcon: ds,
        ChevronUpIcon: ms,
        ChromaticIcon: ps,
        ChromeIcon: fs,
        CircleHollowIcon: hs,
        CircleIcon: ys,
        ClearIcon: bs,
        CloseAltIcon: gs,
        CloseIcon: Ss,
        CloudHollowIcon: vs,
        CloudIcon: Es,
        CogIcon: Is,
        CollapseIcon: It,
        CommandIcon: xs,
        CommentAddIcon: Rs,
        CommentIcon: As,
        CommentsIcon: _s,
        CommitIcon: Ts,
        CompassIcon: $s,
        ComponentDrivenIcon: Cs,
        ComponentIcon: Os,
        ContrastIcon: ws,
        ContrastIgnoredIcon: ks,
        ControlsIcon: Ns,
        CopyIcon: xt,
        CreditIcon: Ps,
        CrossIcon: Ls,
        DashboardIcon: Ds,
        DatabaseIcon: Ms,
        DeleteIcon: Us,
        DiamondIcon: Fs,
        DirectionIcon: Hs,
        DiscordIcon: Bs,
        DocChartIcon: Gs,
        DocListIcon: zs,
        DocumentIcon: Ws,
        DownloadIcon: js,
        DragIcon: Ys,
        EditIcon: Vs,
        EllipsisIcon: qs,
        EmailIcon: Ks,
        ExpandAltIcon: Rt,
        ExpandIcon: Xs,
        EyeCloseIcon: At,
        EyeIcon: _t,
        FaceHappyIcon: Qs,
        FaceNeutralIcon: Zs,
        FaceSadIcon: Js,
        FacebookIcon: eu,
        FailedIcon: tu,
        FastForwardIcon: nu,
        FigmaIcon: au,
        FilterIcon: ru,
        FlagIcon: ou,
        FolderIcon: iu,
        FormIcon: lu,
        GDriveIcon: cu,
        GithubIcon: su,
        GitlabIcon: uu,
        GlobeIcon: du,
        GoogleIcon: mu,
        GraphBarIcon: pu,
        GraphLineIcon: fu,
        GraphqlIcon: hu,
        GridAltIcon: yu,
        GridIcon: bu,
        GrowIcon: gu,
        HeartHollowIcon: Su,
        HeartIcon: vu,
        HomeIcon: Eu,
        HourglassIcon: Iu,
        InfoIcon: xu,
        ItalicIcon: Ru,
        JumpToIcon: Au,
        KeyIcon: _u,
        LightningIcon: Tu,
        LightningOffIcon: $u,
        LinkBrokenIcon: Cu,
        LinkIcon: Ou,
        LinkedinIcon: wu,
        LinuxIcon: ku,
        ListOrderedIcon: Nu,
        ListUnorderedIcon: Pu,
        LocationIcon: Tt,
        LockIcon: Lu,
        MarkdownIcon: Du,
        MarkupIcon: Mu,
        MediumIcon: Uu,
        MemoryIcon: Fu,
        MenuIcon: Hu,
        MergeIcon: Bu,
        MirrorIcon: Gu,
        MobileIcon: zu,
        MoonIcon: Wu,
        NutIcon: ju,
        OutboxIcon: Yu,
        OutlineIcon: Vu,
        PaintBrushIcon: qu,
        PaperClipIcon: Ku,
        ParagraphIcon: Xu,
        PassedIcon: Qu,
        PhoneIcon: Zu,
        PhotoDragIcon: Ju,
        PhotoIcon: ed,
        PhotoStabilizeIcon: td,
        PinAltIcon: nd,
        PinIcon: ad,
        PlayAllHollowIcon: rd,
        PlayBackIcon: od,
        PlayHollowIcon: id,
        PlayIcon: ld,
        PlayNextIcon: cd,
        PlusIcon: sd,
        PointerDefaultIcon: ud,
        PointerHandIcon: dd,
        PowerIcon: md,
        PrintIcon: pd,
        ProceedIcon: fd,
        ProfileIcon: hd,
        PullRequestIcon: yd,
        QuestionIcon: bd,
        RSSIcon: gd,
        RedirectIcon: Sd,
        ReduxIcon: vd,
        RefreshIcon: Ed,
        ReplyIcon: Id,
        RepoIcon: xd,
        RequestChangeIcon: Rd,
        RewindIcon: Ad,
        RulerIcon: _d,
        SaveIcon: Td,
        SearchIcon: $d,
        ShareAltIcon: Cd,
        ShareIcon: Od,
        ShieldIcon: wd,
        SideBySideIcon: kd,
        SidebarAltIcon: Nd,
        SidebarAltToggleIcon: Pd,
        SidebarIcon: Ld,
        SidebarToggleIcon: Dd,
        SpeakerIcon: Md,
        StackedIcon: Ud,
        StarHollowIcon: Fd,
        StarIcon: Hd,
        StatusFailIcon: Bd,
        StatusIcon: Gd,
        StatusPassIcon: zd,
        StatusWarnIcon: Wd,
        StickerIcon: jd,
        StopAltHollowIcon: Yd,
        StopAltIcon: Vd,
        StopIcon: qd,
        StorybookIcon: Kd,
        StructureIcon: Xd,
        SubtractIcon: Qd,
        SunIcon: Zd,
        SupportIcon: Jd,
        SweepIcon: em,
        SwitchAltIcon: tm,
        SyncIcon: De,
        TabletIcon: nm,
        ThumbsUpIcon: am,
        TimeIcon: rm,
        TimerIcon: om,
        TransferIcon: im,
        TrashIcon: lm,
        TwitterIcon: cm,
        TypeIcon: sm,
        UbuntuIcon: um,
        UndoIcon: dm,
        UnfoldIcon: mm,
        UnlockIcon: pm,
        UnpinIcon: fm,
        UploadIcon: hm,
        UserAddIcon: ym,
        UserAltIcon: bm,
        UserIcon: gm,
        UsersIcon: Sm,
        VSCodeIcon: vm,
        VerifiedIcon: Em,
        VideoIcon: Im,
        WandIcon: xm,
        WatchIcon: Rm,
        WindowsIcon: Am,
        WrenchIcon: _m,
        XIcon: Tm,
        YoutubeIcon: $m,
        ZoomIcon: Cm,
        ZoomOutIcon: Om,
        ZoomResetIcon: wm,
        iconList: km,
      } = __STORYBOOK_ICONS__
    O()
    w()
    k()
    var Mm = __STORYBOOK_THEMING__,
      {
        CacheProvider: Um,
        ClassNames: Fm,
        Global: $t,
        ThemeProvider: Hm,
        background: Bm,
        color: Gm,
        convert: Ct,
        create: zm,
        createCache: Wm,
        createGlobal: jm,
        createReset: Ym,
        css: Vm,
        darken: qm,
        ensure: Km,
        ignoreSsrWarning: Xm,
        isPropValid: Qm,
        jsx: Zm,
        keyframes: Jm,
        lighten: ep,
        styled: E,
        themes: Ot,
        typography: tp,
        useTheme: np,
        withTheme: ap,
      } = __STORYBOOK_THEMING__
    O()
    w()
    k()
    var cp = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: sp,
        ARGTYPES_INFO_RESPONSE: up,
        CHANNEL_CREATED: dp,
        CHANNEL_WS_DISCONNECT: mp,
        CONFIG_ERROR: pp,
        CREATE_NEW_STORYFILE_REQUEST: fp,
        CREATE_NEW_STORYFILE_RESPONSE: hp,
        CURRENT_STORY_WAS_SET: yp,
        DOCS_PREPARED: bp,
        DOCS_RENDERED: gp,
        FILE_COMPONENT_SEARCH_REQUEST: Sp,
        FILE_COMPONENT_SEARCH_RESPONSE: vp,
        FORCE_REMOUNT: Ep,
        FORCE_RE_RENDER: Ip,
        GLOBALS_UPDATED: xp,
        NAVIGATE_URL: Rp,
        PLAY_FUNCTION_THREW_EXCEPTION: Ap,
        PRELOAD_ENTRIES: _p,
        PREVIEW_BUILDER_PROGRESS: Tp,
        PREVIEW_KEYDOWN: $p,
        REGISTER_SUBSCRIPTION: Cp,
        REQUEST_WHATS_NEW_DATA: Op,
        RESET_STORY_ARGS: wp,
        RESULT_WHATS_NEW_DATA: kp,
        SAVE_STORY_REQUEST: Np,
        SAVE_STORY_RESPONSE: Pp,
        SELECT_STORY: Lp,
        SET_CONFIG: Dp,
        SET_CURRENT_STORY: Mp,
        SET_FILTER: Up,
        SET_GLOBALS: Fp,
        SET_INDEX: Hp,
        SET_STORIES: Bp,
        SET_WHATS_NEW_CACHE: Gp,
        SHARED_STATE_CHANGED: zp,
        SHARED_STATE_SET: Wp,
        STORIES_COLLAPSE_ALL: jp,
        STORIES_EXPAND_ALL: Yp,
        STORY_ARGS_UPDATED: Vp,
        STORY_CHANGED: wt,
        STORY_ERRORED: qp,
        STORY_FINISHED: kt,
        STORY_HOT_UPDATED: Nt,
        STORY_INDEX_INVALIDATED: Kp,
        STORY_MISSING: Xp,
        STORY_PREPARED: Qp,
        STORY_RENDERED: Zp,
        STORY_RENDER_PHASE_CHANGED: Pt,
        STORY_SPECIFIED: Jp,
        STORY_THREW_EXCEPTION: ef,
        STORY_UNCHANGED: tf,
        TELEMETRY_ERROR: nf,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: af,
        UNHANDLED_ERRORS_WHILE_PLAYING: rf,
        UPDATE_GLOBALS: of,
        UPDATE_QUERY_PARAMS: lf,
        UPDATE_STORY_ARGS: cf,
      } = __STORYBOOK_CORE_EVENTS__
    O()
    w()
    k()
    var Ae = 'storybook/highlight',
      Me = `${Ae}/add`,
      Ue = `${Ae}/remove`,
      pf = `${Ae}/reset`,
      Lt = `${Ae}/scroll-into-view`
    O()
    w()
    k()
    var gf = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Sf,
        createPortal: vf,
        createRoot: Ef,
        findDOMNode: Dt,
        flushSync: Mt,
        hydrate: If,
        hydrateRoot: xf,
        render: Rf,
        unmountComponentAtNode: Af,
        unstable_batchedUpdates: _f,
        unstable_renderSubtreeIntoContainer: Tf,
        version: $f,
      } = __REACT_DOM__
    var W = { VIOLATION: 'violations', PASS: 'passes', INCOMPLETION: 'incomplete' },
      Ma = {
        'area-alt': {
          title: '<area> alt text',
          axeSummary: 'Ensure <area> elements of image maps have alternative text',
          friendlySummary: 'Add alt text to all <area> elements of image maps.',
        },
        'aria-allowed-attr': {
          title: 'Supported ARIA attributes',
          axeSummary: "Ensure an element's role supports its ARIA attributes",
          friendlySummary: "Only use ARIA attributes that are permitted for the element's role.",
        },
        'aria-braille-equivalent': {
          title: 'Braille equivalent',
          axeSummary:
            'Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent',
          friendlySummary:
            'If you use braille ARIA labels, also provide a matching non-braille label.',
        },
        'aria-command-name': {
          title: 'ARIA command name',
          axeSummary: 'Ensure every ARIA button, link and menuitem has an accessible name',
          friendlySummary: 'Every ARIA button, link, or menuitem needs a label or accessible name.',
        },
        'aria-conditional-attr': {
          title: 'ARIA attribute valid for role',
          axeSummary:
            "Ensure ARIA attributes are used as described in the specification of the element's role",
          friendlySummary: "Follow the element role's specification when using ARIA attributes.",
        },
        'aria-deprecated-role': {
          title: 'Deprecated ARIA role',
          axeSummary: 'Ensure elements do not use deprecated roles',
          friendlySummary: "Don't use deprecated ARIA roles on elements.",
        },
        'aria-hidden-body': {
          title: 'Hidden body',
          axeSummary: 'Ensure aria-hidden="true" is not present on the document <body>',
          friendlySummary: 'Never set aria-hidden="true" on the <body> element.',
        },
        'aria-hidden-focus': {
          title: 'Hidden element focus',
          axeSummary:
            'Ensure aria-hidden elements are not focusable nor contain focusable elements',
          friendlySummary:
            'Elements marked hidden (aria-hidden) should not be focusable or contain focusable items.',
        },
        'aria-input-field-name': {
          title: 'ARIA input field name',
          axeSummary: 'Ensure every ARIA input field has an accessible name',
          friendlySummary: 'Give each ARIA text input or field a label or accessible name.',
        },
        'aria-meter-name': {
          title: 'ARIA meter name',
          axeSummary: 'Ensure every ARIA meter node has an accessible name',
          friendlySummary: 'Give each element with role="meter" a label or accessible name.',
        },
        'aria-progressbar-name': {
          title: 'ARIA progressbar name',
          axeSummary: 'Ensure every ARIA progressbar node has an accessible name',
          friendlySummary: 'Give each element with role="progressbar" a label or accessible name.',
        },
        'aria-prohibited-attr': {
          title: 'ARIA prohibited attributes',
          axeSummary: "Ensure ARIA attributes are not prohibited for an element's role",
          friendlySummary: "Don't use ARIA attributes that are forbidden for that element's role.",
        },
        'aria-required-attr': {
          title: 'ARIA required attributes',
          axeSummary: 'Ensure elements with ARIA roles have all required ARIA attributes',
          friendlySummary: 'Include all required ARIA attributes for elements with that ARIA role.',
        },
        'aria-required-children': {
          title: 'ARIA required children',
          axeSummary: 'Ensure elements with an ARIA role that require child roles contain them',
          friendlySummary:
            'If an ARIA role requires specific child roles, include those child elements.',
        },
        'aria-required-parent': {
          title: 'ARIA required parent',
          axeSummary:
            'Ensure elements with an ARIA role that require parent roles are contained by them',
          friendlySummary:
            'Place elements with certain ARIA roles inside the required parent role element.',
        },
        'aria-roles': {
          title: 'ARIA role value',
          axeSummary: 'Ensure all elements with a role attribute use a valid value',
          friendlySummary:
            'Use only valid values in the role attribute (no typos or invalid roles).',
        },
        'aria-toggle-field-name': {
          title: 'ARIA toggle field name',
          axeSummary: 'Ensure every ARIA toggle field has an accessible name',
          friendlySummary:
            'Every ARIA toggle field (elements with the checkbox, radio, or switch roles) needs an accessible name.',
        },
        'aria-tooltip-name': {
          title: 'ARIA tooltip name',
          axeSummary: 'Ensure every ARIA tooltip node has an accessible name',
          friendlySummary: 'Give each element with role="tooltip" a descriptive accessible name.',
        },
        'aria-valid-attr-value': {
          title: 'ARIA attribute values valid',
          axeSummary: 'Ensure all ARIA attributes have valid values',
          friendlySummary:
            'Use only valid values for ARIA attributes (no typos or invalid values).',
        },
        'aria-valid-attr': {
          title: 'ARIA attribute valid',
          axeSummary: 'Ensure attributes that begin with aria- are valid ARIA attributes',
          friendlySummary:
            'Use only valid aria-* attributes (make sure the attribute name is correct).',
        },
        blink: {
          title: '<blink> element',
          axeSummary: 'Ensure <blink> elements are not used',
          friendlySummary: "Don't use the deprecated <blink> element.",
        },
        'button-name': {
          title: 'Button name',
          axeSummary: 'Ensure buttons have discernible text',
          friendlySummary: 'Every <button> needs a visible label or accessible name.',
        },
        bypass: {
          title: 'Navigation bypass',
          axeSummary:
            'Ensure each page has at least one mechanism to bypass navigation and jump to content',
          friendlySummary:
            'Provide a way to skip repetitive navigation (e.g. a "Skip to content" link).',
        },
        'color-contrast': {
          title: 'Color contrast',
          axeSummary:
            'Ensure the contrast between foreground and background text meets WCAG 2 AA minimum thresholds',
          friendlySummary:
            'The color contrast between text and its background meets WCAG AA contrast ratio.',
        },
        'definition-list': {
          title: 'Definition list structure',
          axeSummary: 'Ensure <dl> elements are structured correctly',
          friendlySummary:
            'Definition lists (<dl>) should directly contain <dt> and <dd> elements in order.',
        },
        dlitem: {
          title: 'Definition list items',
          axeSummary: 'Ensure <dt> and <dd> elements are contained by a <dl>',
          friendlySummary: 'Ensure <dt> and <dd> elements are contained by a <dl>',
        },
        'document-title': {
          title: 'Document title',
          axeSummary: 'Ensure each HTML document contains a non-empty <title> element',
          friendlySummary: 'Include a non-empty <title> element for every page.',
        },
        'duplicate-id-aria': {
          title: 'Unique id',
          axeSummary: 'Ensure every id attribute value used in ARIA and in labels is unique',
          friendlySummary: 'Every id used for ARIA or form labels should be unique on the page.',
        },
        'form-field-multiple-labels': {
          title: 'Multiple form field labels',
          axeSummary: 'Ensure a form field does not have multiple <label> elements',
          friendlySummary: "Don't give a single form field more than one <label>.",
        },
        'frame-focusable-content': {
          title: 'Focusable frames',
          axeSummary:
            'Ensure <frame> and <iframe> with focusable content do not have tabindex="-1"',
          friendlySummary: `Don't set tabindex="-1" on a <frame> or <iframe> that contains focusable elements.`,
        },
        'frame-title-unique': {
          title: 'Unique frame title',
          axeSummary: 'Ensure <iframe> and <frame> elements contain a unique title attribute',
          friendlySummary: 'Use a unique title attribute for each <frame> or <iframe> on the page.',
        },
        'frame-title': {
          title: 'Frame title',
          axeSummary: 'Ensure <iframe> and <frame> elements have an accessible name',
          friendlySummary: 'Every <frame> and <iframe> needs a title or accessible name.',
        },
        'html-has-lang': {
          title: '<html> has lang',
          axeSummary: 'Ensure every HTML document has a lang attribute',
          friendlySummary: 'Add a lang attribute to the <html> element.',
        },
        'html-lang-valid': {
          title: '<html> lang valid',
          axeSummary: 'Ensure the <html lang> attribute has a valid value',
          friendlySummary: 'Use a valid language code in the <html lang> attribute.',
        },
        'html-xml-lang-mismatch': {
          title: 'HTML and XML lang mismatch',
          axeSummary:
            "Ensure that HTML elements with both lang and xml:lang agree on the page's language",
          friendlySummary:
            'If using both lang and xml:lang on <html>, make sure they are the same language.',
        },
        'image-alt': {
          title: 'Image alt text',
          axeSummary: 'Ensure <img> elements have alternative text or a role of none/presentation',
          friendlySummary: 'Give every image alt text or mark it as decorative with alt="".',
        },
        'input-button-name': {
          title: 'Input button name',
          axeSummary: 'Ensure input buttons have discernible text',
          friendlySummary:
            'Give each <input type="button"> or similar a clear label (text or aria-label).',
        },
        'input-image-alt': {
          title: 'Input image alt',
          axeSummary: 'Ensure <input type="image"> elements have alternative text',
          friendlySummary: '<input type="image"> must have alt text describing its image.',
        },
        label: {
          title: 'Form label',
          axeSummary: 'Ensure every form element has a label',
          friendlySummary: 'Every form field needs an associated label.',
        },
        'link-in-text-block': {
          title: 'Identifiable links',
          axeSummary:
            'Ensure links are distinguishable from surrounding text without relying on color',
          friendlySummary:
            'Make sure links are obviously identifiable without relying only on color.',
        },
        'link-name': {
          title: 'Link name',
          axeSummary: 'Ensure links have discernible text',
          friendlySummary:
            'Give each link meaningful text or an aria-label so its purpose is clear.',
        },
        list: {
          title: 'List structure',
          axeSummary: 'Ensure that lists are structured correctly',
          friendlySummary: 'Use proper list structure. Only use <li> inside <ul> or <ol>.',
        },
        listitem: {
          title: 'List item',
          axeSummary: 'Ensure <li> elements are used semantically',
          friendlySummary: 'Only use <li> tags inside <ul> or <ol> lists.',
        },
        marquee: {
          title: '<marquee> element',
          axeSummary: 'Ensure <marquee> elements are not used',
          friendlySummary: "Don't use the deprecated <marquee> element.",
        },
        'meta-refresh': {
          title: '<meta> refresh',
          axeSummary: 'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',
          friendlySummary:
            'Avoid auto-refreshing or redirecting pages using <meta http-equiv="refresh">.',
        },
        'meta-viewport': {
          title: '<meta> viewport scaling',
          axeSummary: 'Ensure <meta name="viewport"> does not disable text scaling and zooming',
          friendlySummary: `Don't disable user zooming in <meta name="viewport"> to allow scaling.`,
        },
        'nested-interactive': {
          title: 'Nested interactive controls',
          axeSummary:
            'Ensure interactive controls are not nested (nesting causes screen reader/focus issues)',
          friendlySummary:
            'Do not nest interactive elements; it can confuse screen readers and keyboard focus.',
        },
        'no-autoplay-audio': {
          title: 'Autoplaying video',
          axeSummary:
            'Ensure <video> or <audio> do not autoplay audio > 3 seconds without a control to stop/mute',
          friendlySummary:
            "Don't autoplay audio for more than 3 seconds without providing a way to stop or mute it.",
        },
        'object-alt': {
          title: '<object> alt text',
          axeSummary: 'Ensure <object> elements have alternative text',
          friendlySummary: 'Provide alternative text or content for <object> elements.',
        },
        'role-img-alt': {
          title: 'role="img" alt text',
          axeSummary: 'Ensure elements with role="img" have alternative text',
          friendlySummary: 'Any element with role="img" needs alt text.',
        },
        'scrollable-region-focusable': {
          title: 'Scrollable element focusable',
          axeSummary: 'Ensure elements with scrollable content are keyboard-accessible',
          friendlySummary:
            'If an area can scroll, ensure it can be focused and scrolled via keyboard.',
        },
        'select-name': {
          title: '<select> name',
          axeSummary: 'Ensure <select> elements have an accessible name',
          friendlySummary: 'Give each <select> field a label or other accessible name.',
        },
        'server-side-image-map': {
          title: 'Server-side image map',
          axeSummary: 'Ensure that server-side image maps are not used',
          friendlySummary: "Don't use server-side image maps.",
        },
        'svg-img-alt': {
          title: 'SVG image alt text',
          axeSummary: 'Ensure <svg> images/graphics have accessible text',
          friendlySummary: 'SVG images with role="img" or similar need a text description.',
        },
        'td-headers-attr': {
          title: 'Table headers attribute',
          axeSummary: 'Ensure each cell in a table using headers only refers to <th> in that table',
          friendlySummary:
            'In tables using the headers attribute, only reference other cells in the same table.',
        },
        'th-has-data-cells': {
          title: '<th> has data cell',
          axeSummary: 'Ensure <th> (or header role) elements have data cells they describe',
          friendlySummary:
            'Every table header (<th> or header role) should correspond to at least one data cell.',
        },
        'valid-lang': {
          title: 'Valid lang',
          axeSummary: 'Ensure lang attributes have valid values',
          friendlySummary: 'Use valid language codes in all lang attributes.',
        },
        'video-caption': {
          title: '<video> captions',
          axeSummary: 'Ensure <video> elements have captions',
          friendlySummary: 'Provide captions for all <video> content.',
        },
      },
      Ua = {
        'autocomplete-valid': {
          title: 'autocomplete attribute valid',
          axeSummary:
            'Ensure the autocomplete attribute is correct and suitable for the form field',
          friendlySummary: "Use valid autocomplete values that match the form field's purpose.",
        },
        'avoid-inline-spacing': {
          title: 'Forced inline spacing',
          axeSummary:
            'Ensure that text spacing set via inline styles can be adjusted with custom CSS',
          friendlySummary:
            "Don't lock in text spacing with forced (!important) inline styles\u2014allow user CSS to adjust text spacing.",
        },
      },
      Fa = {
        'target-size': {
          title: 'Touch target size',
          axeSummary: 'Ensure touch targets have sufficient size and space',
          friendlySummary:
            'Make sure interactive elements are big enough and not too close together for touch.',
        },
      },
      Ha = {
        accesskeys: {
          title: 'Unique accesskey',
          axeSummary: 'Ensure every accesskey attribute value is unique',
          friendlySummary: 'Use unique values for all accesskey attributes.',
        },
        'aria-allowed-role': {
          title: 'Appropriate role value',
          axeSummary: 'Ensure the role attribute has an appropriate value for the element',
          friendlySummary: 'ARIA roles should have a valid value for the element.',
        },
        'aria-dialog-name': {
          title: 'ARIA dialog name',
          axeSummary: 'Ensure every ARIA dialog and alertdialog has an accessible name',
          friendlySummary: 'Give each ARIA dialog or alertdialog a title or accessible name.',
        },
        'aria-text': {
          title: 'ARIA role="text"',
          axeSummary: 'Ensure role="text" is used on elements with no focusable descendants',
          friendlySummary: `Only use role="text" on elements that don't contain focusable elements.`,
        },
        'aria-treeitem-name': {
          title: 'ARIA treeitem name',
          axeSummary: 'Ensure every ARIA treeitem node has an accessible name',
          friendlySummary: 'Give each ARIA treeitem a label or accessible name.',
        },
        'empty-heading': {
          title: 'Empty heading',
          axeSummary: 'Ensure headings have discernible text',
          friendlySummary: "Don't leave heading elements empty or hide them.",
        },
        'empty-table-header': {
          title: 'Empty table header',
          axeSummary: 'Ensure table headers have discernible text',
          friendlySummary: 'Make sure table header cells have visible text.',
        },
        'frame-tested': {
          title: 'Test all frames',
          axeSummary: 'Ensure <iframe> and <frame> elements contain the axe-core script',
          friendlySummary:
            'Make sure axe-core is injected into all frames or iframes so they are tested.',
        },
        'heading-order': {
          title: 'Heading order',
          axeSummary: 'Ensure the order of headings is semantically correct (no skipping levels)',
          friendlySummary: "Use proper heading order (don't skip heading levels).",
        },
        'image-redundant-alt': {
          title: 'Redundant image alt text',
          axeSummary: 'Ensure image alternative text is not repeated as nearby text',
          friendlySummary:
            "Avoid repeating the same information in both an image's alt text and nearby text.",
        },
        'label-title-only': {
          title: 'Visible form element label',
          axeSummary: 'Ensure each form element has a visible label (not only title/ARIA)',
          friendlySummary:
            'Every form input needs a visible label (not only a title attribute or hidden text).',
        },
        'landmark-banner-is-top-level': {
          title: 'Top-level landmark banner',
          axeSummary: 'Ensure the banner landmark is at top level (not nested)',
          friendlySummary:
            'Use the banner landmark (e.g. site header) only at the top level of the page, not inside another landmark.',
        },
        'landmark-complementary-is-top-level': {
          title: 'Top-level <aside>',
          axeSummary: 'Ensure the complementary landmark (<aside>) is top level',
          friendlySummary:
            'The complementary landmark <aside> or role="complementary" should be a top-level region, not nested in another landmark.',
        },
        'landmark-contentinfo-is-top-level': {
          title: 'Top-level contentinfo',
          axeSummary: 'Ensure the contentinfo landmark (footer) is top level',
          friendlySummary:
            'Make sure the contentinfo landmark (footer) is at the top level of the page and not contained in another landmark.',
        },
        'landmark-main-is-top-level': {
          title: 'Top-level main',
          axeSummary: 'Ensure the main landmark is at top level',
          friendlySummary:
            'The main landmark should be a top-level element and not nested inside another landmark.',
        },
        'landmark-no-duplicate-banner': {
          title: 'Duplicate banner landmark',
          axeSummary: 'Ensure the document has at most one banner landmark',
          friendlySummary: 'Have only one role="banner" or <header> on a page.',
        },
        'landmark-no-duplicate-contentinfo': {
          title: 'Duplicate contentinfo',
          axeSummary: 'Ensure the document has at most one contentinfo landmark',
          friendlySummary: 'Have only one role="contentinfo" or <footer> on a page.',
        },
        'landmark-no-duplicate-main': {
          title: 'Duplicate main',
          axeSummary: 'Ensure the document has at most one main landmark',
          friendlySummary: 'Have only one role="main" or <main> on a page.',
        },
        'landmark-one-main': {
          title: 'main landmark',
          axeSummary: 'Ensure the document has a main landmark',
          friendlySummary:
            'Include a main landmark on each page using a <main> region or role="main".',
        },
        'landmark-unique': {
          title: 'Unique landmark',
          axeSummary: 'Ensure landmarks have a unique role or role/label combination',
          friendlySummary:
            'If you use multiple landmarks of the same type, give them unique labels (names).',
        },
        'meta-viewport-large': {
          title: 'Significant viewport scaling',
          axeSummary: 'Ensure <meta name="viewport"> can scale a significant amount (e.g. 500%)',
          friendlySummary:
            '<meta name="viewport"> should allow users to significantly scale content.',
        },
        'page-has-heading-one': {
          title: 'Has <h1>',
          axeSummary: 'Ensure the page (or at least one frame) contains a level-one heading',
          friendlySummary: 'Every page or frame should have at least one <h1> heading.',
        },
        'presentation-role-conflict': {
          title: 'Presentational content',
          axeSummary: 'Ensure elements with role="presentation"/"none" have no ARIA or tabindex',
          friendlySummary: `Don't give elements with role="none"/"presentation" any ARIA attributes or a tabindex.`,
        },
        region: {
          title: 'Landmark regions',
          axeSummary: 'Ensure all page content is contained by landmarks',
          friendlySummary:
            'Wrap all page content in appropriate landmark regions (<header>, <main>, <footer>, etc.).',
        },
        'scope-attr-valid': {
          title: 'scope attribute',
          axeSummary: 'Ensure the scope attribute is used correctly on tables',
          friendlySummary:
            'Use the scope attribute only on <th> elements, with proper values (col, row, etc.).',
        },
        'skip-link': {
          title: 'Skip link',
          axeSummary: 'Ensure all "skip" links have a focusable target',
          friendlySummary:
            'Make sure any "skip to content" link targets an existing, focusable element.',
        },
        tabindex: {
          title: 'tabindex values',
          axeSummary: 'Ensure tabindex attribute values are not greater than 0',
          friendlySummary: "Don't use tabindex values greater than 0.",
        },
        'table-duplicate-name': {
          title: 'Duplicate names for table',
          axeSummary: 'Ensure the <caption> does not duplicate the summary attribute text',
          friendlySummary:
            "Don't use the same text in both a table's <caption> and its summary attribute.",
        },
      },
      Ba = {
        'color-contrast-enhanced': {
          title: 'Enhanced color contrast',
          axeSummary:
            'Ensure contrast between text and background meets WCAG 2 AAA enhanced contrast thresholds',
          friendlySummary:
            'Use extra-high contrast for text and background to meet WCAG AAA level.',
        },
        'identical-links-same-purpose': {
          title: 'Same link name, same purpose',
          axeSummary: 'Ensure links with the same accessible name serve a similar purpose',
          friendlySummary:
            'If two links have the same text, they should do the same thing (lead to the same content).',
        },
        'meta-refresh-no-exceptions': {
          title: 'No <meta http-equiv="refresh">',
          axeSummary:
            'Ensure <meta http-equiv="refresh"> is not used for delayed refresh (no exceptions)',
          friendlySummary: `Don't auto-refresh or redirect pages using <meta http-equiv="refresh"> even with a delay.`,
        },
      },
      Ga = {
        'css-orientation-lock': {
          title: 'CSS orientation lock',
          axeSummary:
            'Ensure content is not locked to a specific display orientation (works in all orientations)',
          friendlySummary:
            "Don't lock content to one screen orientation; support both portrait and landscape modes.",
        },
        'focus-order-semantics': {
          title: 'Focus order semantic role',
          axeSummary:
            'Ensure elements in the tab order have a role appropriate for interactive content',
          friendlySummary:
            'Ensure elements in the tab order have a role appropriate for interactive content',
        },
        'hidden-content': {
          title: 'Hidden content',
          axeSummary: 'Informs users about hidden content',
          friendlySummary: 'Display hidden content on the page for test analysis.',
        },
        'label-content-name-mismatch': {
          title: 'Content name mismatch',
          axeSummary:
            'Ensure elements labeled by their content include that text in their accessible name',
          friendlySummary:
            "If an element's visible text serves as its label, include that text in its accessible name.",
        },
        'p-as-heading': {
          title: 'No <p> headings',
          axeSummary: "Ensure <p> elements aren't styled to look like headings (use real headings)",
          friendlySummary:
            "Don't just style a <p> to look like a heading \u2013 use an actual heading tag for headings.",
        },
        'table-fake-caption': {
          title: 'Table caption',
          axeSummary: 'Ensure that tables with a caption use the <caption> element',
          friendlySummary:
            'Use a <caption> element for table captions instead of just styled text.',
        },
        'td-has-header': {
          title: '<td> has header',
          axeSummary:
            'Ensure each non-empty data cell in large tables (3\xD73+) has one or more headers',
          friendlySummary:
            'Every data cell in large tables should be associated with at least one header cell.',
        },
      },
      za = {
        'aria-roledescription': {
          title: 'aria-roledescription',
          axeSummary:
            'Ensure aria-roledescription is only used on elements with an implicit or explicit role',
          friendlySummary:
            'Only use aria-roledescription on elements that already have a defined role.',
        },
      },
      en = { ...Ma, ...Ua, ...Fa, ...Ba, ...Ha, ...Ga, ...za },
      je = (e) => en[e.id]?.title || e.id,
      Ye = (e) => en[e.id]?.friendlySummary || e.description,
      G = 'storybook/a11y',
      Ve = `${G}/panel`,
      Wa = 'a11y',
      ja = `${G}/result`,
      Ya = `${G}/request`,
      Va = `${G}/running`,
      qa = `${G}/error`,
      Ka = `${G}/manual`,
      Xa = `${G}/select`,
      Qa = 'writing-tests/accessibility-testing',
      Za = `${Qa}#why-are-my-tests-failing-in-different-environments`,
      ce = { RESULT: ja, REQUEST: Ya, RUNNING: Va, ERROR: qa, MANUAL: Ka, SELECT: Xa },
      Ut = 'storybook/component-test',
      Ja = 'storybook/a11y',
      er = ['html', 'body', 'main'],
      Fe = Ct(Ot.light),
      He = {
        [W.VIOLATION]: Fe.color.negative,
        [W.PASS]: Fe.color.positive,
        [W.INCOMPLETION]: Fe.color.warning,
      },
      tn = pe({
        parameters: {},
        results: void 0,
        highlighted: !1,
        toggleHighlight: () => {},
        tab: W.VIOLATION,
        handleCopyLink: () => {},
        setTab: () => {},
        setStatus: () => {},
        status: 'initial',
        error: void 0,
        handleManual: () => {},
        discrepancy: null,
        selectedItems: new Map(),
        allExpanded: !1,
        toggleOpen: () => {},
        handleCollapseAll: () => {},
        handleExpandAll: () => {},
        handleJumpToElement: () => {},
        handleSelectionChange: () => {},
      }),
      tr = (e) => {
        let t = bt('a11y', {}),
          [a] = yt() ?? [],
          n = Re(),
          r = R((y = !1) => (y ? 'manual' : 'initial'), []),
          l = j(() => a?.a11y?.manual ?? !1, [a?.a11y?.manual]),
          i = j(() => {
            let y = n.getQueryParam('a11ySelection')
            return (y && n.setQueryParams({ a11ySelection: '' }), y)
          }, [n]),
          [c, d] = Le(G),
          [s, p] = F(() => {
            let [y] = i?.split('.') ?? []
            return y && Object.values(W).includes(y) ? y : W.VIOLATION
          }),
          [u, f] = F(void 0),
          [b, h] = F(r(l)),
          [I, v] = F(!!i),
          { storyId: g } = gt(),
          A = ft((y) => y[g]?.[Ja]?.value)
        B(
          () =>
            pt('storybook/component-test').onAllStatusChange((y, T) => {
              let S = y[g]?.[Ut],
                $ = T[g]?.[Ut]
              S?.value === 'status-value:error' &&
                $?.value !== 'status-value:error' &&
                h('component-test-error')
            }),
          [g]
        )
        let Y = R(() => v((y) => !y), []),
          [C, L] = F(() => {
            let y = new Map()
            if (i && /^[a-z]+.[a-z-]+.[0-9]+$/.test(i)) {
              let [T, S] = i.split('.')
              y.set(`${T}.${S}`, i)
            }
            return y
          }),
          _ = j(() => c?.[s]?.every((y) => C.has(`${s}.${y.id}`)) ?? !1, [c, C, s]),
          x = R((y, T, S) => {
            y.stopPropagation()
            let $ = `${T}.${S.id}`
            L((D) => new Map(D.delete($) ? D : D.set($, `${$}.1`)))
          }, []),
          U = R(() => {
            L(new Map())
          }, []),
          q = R(() => {
            L(
              (y) =>
                new Map(
                  c?.[s]?.map((T) => {
                    let S = `${s}.${T.id}`
                    return [S, y.get(S) ?? `${S}.1`]
                  }) ?? []
                )
            )
          }, [c, s]),
          te = R((y) => {
            let [T, S] = y.split('.')
            L(($) => new Map($.set(`${T}.${S}`, y)))
          }, []),
          ne = R((y) => {
            ;(h('error'), f(y))
          }, []),
          ae = R(
            (y, T) => {
              g === T &&
                (h('ran'),
                d(y),
                setTimeout(() => {
                  if ((b === 'ran' && h('ready'), C.size === 1)) {
                    let [S] = C.values()
                    document
                      .getElementById(S)
                      ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }
                }, 900))
            },
            [d, b, g, C]
          ),
          se = R(
            (y, T) => {
              let [S, $] = y.split('.'),
                { helpUrl: D, nodes: ye } = c?.[S]?.find((ue) => ue.id === $) || {},
                be = D && window.open(D, '_blank', 'noopener,noreferrer')
              if (ye && !be) {
                let ue =
                  ye.findIndex((ge) => T.selectors.some((wn) => wn === String(ge.target))) ?? -1
                if (ue !== -1) {
                  let ge = `${S}.${$}.${ue + 1}`
                  ;(L(new Map([[`${S}.${$}`, ge]])),
                    setTimeout(() => {
                      document
                        .getElementById(ge)
                        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }, 100))
                }
              }
            },
            [c]
          ),
          K = R(
            ({ reporters: y }) => {
              let T = y.find((S) => S.type === 'a11y')
              T && ('error' in T.result ? ne(T.result.error) : ae(T.result, g))
            },
            [ne, ae, g]
          ),
          lt = R(
            ({ newPhase: y }) => {
              ;(y === 'loading' && (d(void 0), h(l ? 'manual' : 'initial')),
                y === 'afterEach' && !l && h('running'))
            },
            [l, d]
          ),
          X = ht(
            {
              [ce.RESULT]: ae,
              [ce.ERROR]: ne,
              [ce.SELECT]: se,
              [wt]: () => L(new Map()),
              [Pt]: lt,
              [kt]: K,
              [Nt]: () => {
                ;(h('running'), X(ce.MANUAL, g, t))
              },
            },
            [lt, K, se, ne, ae, t, g]
          ),
          Tn = R(() => {
            ;(h('running'), X(ce.MANUAL, g, t))
          }, [X, t, g]),
          $n = R(async (y) => {
            let { createCopyToClipboardFunction: T } = await Promise.resolve().then(
              () => (Ne(), mt)
            )
            await T()(`${window.location.origin}${y}`)
          }, []),
          Cn = R((y) => X(Lt, y), [X])
        ;(B(() => {
          h(r(l))
        }, [r, l]),
          B(() => {
            if ((X(Ue, `${G}/selected`), X(Ue, `${G}/others`), !I)) return
            let y = Array.from(C.values()).flatMap((S) => {
              let [$, D, ye] = S.split('.')
              if ($ !== s) return []
              let be = c?.[$]?.find((ue) => ue.id === D)?.nodes[Number(ye) - 1]?.target
              return be ? [String(be)] : []
            })
            X(Me, {
              id: `${G}/selected`,
              priority: 1,
              selectors: y,
              styles: {
                outline: `1px solid color-mix(in srgb, ${He[s]}, transparent 30%)`,
                backgroundColor: 'transparent',
              },
              hoverStyles: { outlineWidth: '2px' },
              focusStyles: { backgroundColor: 'transparent' },
              menu: c?.[s].map((S) => {
                let $ = S.nodes
                  .flatMap((D) => D.target)
                  .map(String)
                  .filter((D) => y.includes(D))
                return [
                  { id: `${s}.${S.id}:info`, title: je(S), description: Ye(S), selectors: $ },
                  {
                    id: `${s}.${S.id}`,
                    iconLeft: 'info',
                    iconRight: 'shareAlt',
                    title: 'Learn how to resolve this violation',
                    clickEvent: ce.SELECT,
                    selectors: $,
                  },
                ]
              }),
            })
            let T = c?.[s]
              .flatMap((S) => S.nodes.flatMap(($) => $.target).map(String))
              .filter((S) => ![...er, ...y].includes(S))
            X(Me, {
              id: `${G}/others`,
              selectors: T,
              styles: {
                outline: `1px solid color-mix(in srgb, ${He[s]}, transparent 30%)`,
                backgroundColor: `color-mix(in srgb, ${He[s]}, transparent 60%)`,
              },
              hoverStyles: { outlineWidth: '2px' },
              focusStyles: { backgroundColor: 'transparent' },
              menu: c?.[s].map((S) => {
                let $ = S.nodes
                  .flatMap((D) => D.target)
                  .map(String)
                  .filter((D) => !y.includes(D))
                return [
                  { id: `${s}.${S.id}:info`, title: je(S), description: Ye(S), selectors: $ },
                  {
                    id: `${s}.${S.id}`,
                    iconLeft: 'info',
                    iconRight: 'shareAlt',
                    title: 'Learn how to resolve this violation',
                    clickEvent: ce.SELECT,
                    selectors: $,
                  },
                ]
              }),
            })
          }, [X, I, c, s, C]))
        let On = j(() => {
          if (!A) return null
          if (A === 'status-value:success' && c?.violations.length) return 'cliPassedBrowserFailed'
          if (A === 'status-value:error' && !c?.violations.length) {
            if (b === 'ready' || b === 'ran') return 'browserPassedCliFailed'
            if (b === 'manual') return 'cliFailedButModeManual'
          }
          return null
        }, [c?.violations.length, b, A])
        return o.createElement(tn.Provider, {
          value: {
            parameters: t,
            results: c,
            highlighted: I,
            toggleHighlight: Y,
            tab: s,
            setTab: p,
            handleCopyLink: $n,
            status: b,
            setStatus: h,
            error: u,
            handleManual: Tn,
            discrepancy: On,
            selectedItems: C,
            toggleOpen: x,
            allExpanded: _,
            handleCollapseAll: U,
            handleExpandAll: q,
            handleJumpToElement: Cn,
            handleSelectionChange: te,
          },
          ...e,
        })
      },
      nt = () => ve(tn)
    function N() {
      return (
        (N = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t]
                for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
              }
              return e
            }),
        N.apply(null, arguments)
      )
    }
    function ee(e, t, { checkForDefaultPrevented: a = !0 } = {}) {
      return function (n) {
        if ((e?.(n), a === !1 || !n.defaultPrevented)) return t?.(n)
      }
    }
    function at(e, t = []) {
      let a = []
      function n(l, i) {
        let c = pe(i),
          d = a.length
        a = [...a, i]
        function s(u) {
          let { scope: f, children: b, ...h } = u,
            I = f?.[e][d] || c,
            v = j(() => h, Object.values(h))
          return m(I.Provider, { value: v }, b)
        }
        function p(u, f) {
          let b = f?.[e][d] || c,
            h = ve(b)
          if (h) return h
          if (i !== void 0) return i
          throw new Error(`\`${u}\` must be used within \`${l}\``)
        }
        return ((s.displayName = l + 'Provider'), [s, p])
      }
      let r = () => {
        let l = a.map((i) => pe(i))
        return function (i) {
          let c = i?.[e] || l
          return j(() => ({ [`__scope${e}`]: { ...i, [e]: c } }), [i, c])
        }
      }
      return ((r.scopeName = e), [n, nr(r, ...t)])
    }
    function nr(...e) {
      let t = e[0]
      if (e.length === 1) return t
      let a = () => {
        let n = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }))
        return function (r) {
          let l = n.reduce((i, { useScope: c, scopeName: d }) => {
            let s = c(r)[`__scope${d}`]
            return { ...i, ...s }
          }, {})
          return j(() => ({ [`__scope${t.scopeName}`]: l }), [l])
        }
      }
      return ((a.scopeName = t.scopeName), a)
    }
    function ar(e, t) {
      typeof e == 'function' ? e(t) : e != null && (e.current = t)
    }
    function nn(...e) {
      return (t) => e.forEach((a) => ar(a, t))
    }
    function Ft(...e) {
      return R(nn(...e), e)
    }
    var qe = M((e, t) => {
      let { children: a, ...n } = e,
        r = P.toArray(a),
        l = r.find(or)
      if (l) {
        let i = l.props.children,
          c = r.map((d) =>
            d === l ? (P.count(i) > 1 ? P.only(null) : H(i) ? i.props.children : null) : d
          )
        return m(Ke, N({}, n, { ref: t }), H(i) ? V(i, void 0, c) : null)
      }
      return m(Ke, N({}, n, { ref: t }), a)
    })
    qe.displayName = 'Slot'
    var Ke = M((e, t) => {
      let { children: a, ...n } = e
      return H(a)
        ? V(a, { ...ir(n, a.props), ref: t ? nn(t, a.ref) : a.ref })
        : P.count(a) > 1
          ? P.only(null)
          : null
    })
    Ke.displayName = 'SlotClone'
    var rr = ({ children: e }) => m(me, null, e)
    function or(e) {
      return H(e) && e.type === rr
    }
    function ir(e, t) {
      let a = { ...t }
      for (let n in t) {
        let r = e[n],
          l = t[n]
        ;/^on[A-Z]/.test(n)
          ? r && l
            ? (a[n] = (...i) => {
                ;(l(...i), r(...i))
              })
            : r && (a[n] = r)
          : n === 'style'
            ? (a[n] = { ...r, ...l })
            : n === 'className' && (a[n] = [r, l].filter(Boolean).join(' '))
      }
      return { ...e, ...a }
    }
    function lr(e) {
      let t = e + 'CollectionProvider',
        [a, n] = at(t),
        [r, l] = a(t, { collectionRef: { current: null }, itemMap: new Map() }),
        i = (b) => {
          let { scope: h, children: I } = b,
            v = o.useRef(null),
            g = o.useRef(new Map()).current
          return o.createElement(r, { scope: h, itemMap: g, collectionRef: v }, I)
        },
        c = e + 'CollectionSlot',
        d = o.forwardRef((b, h) => {
          let { scope: I, children: v } = b,
            g = l(c, I),
            A = Ft(h, g.collectionRef)
          return o.createElement(qe, { ref: A }, v)
        }),
        s = e + 'CollectionItemSlot',
        p = 'data-radix-collection-item',
        u = o.forwardRef((b, h) => {
          let { scope: I, children: v, ...g } = b,
            A = o.useRef(null),
            Y = Ft(h, A),
            C = l(s, I)
          return (
            o.useEffect(() => (C.itemMap.set(A, { ref: A, ...g }), () => void C.itemMap.delete(A))),
            o.createElement(qe, { [p]: '', ref: Y }, v)
          )
        })
      function f(b) {
        let h = l(e + 'CollectionConsumer', b)
        return o.useCallback(() => {
          let I = h.collectionRef.current
          if (!I) return []
          let v = Array.from(I.querySelectorAll(`[${p}]`))
          return Array.from(h.itemMap.values()).sort(
            (g, A) => v.indexOf(g.ref.current) - v.indexOf(A.ref.current)
          )
        }, [h.collectionRef, h.itemMap])
      }
      return [{ Provider: i, Slot: d, ItemSlot: u }, f, n]
    }
    function cr(e, t) {
      typeof e == 'function' ? e(t) : e != null && (e.current = t)
    }
    function an(...e) {
      return (t) => e.forEach((a) => cr(a, t))
    }
    function sr(...e) {
      return R(an(...e), e)
    }
    var ur = globalThis?.document ? Ee : () => {},
      dr = ut || (() => {}),
      mr = 0
    function rn(e) {
      let [t, a] = F(dr())
      return (
        ur(() => {
          e || a((n) => n ?? String(mr++))
        }, [e]),
        e || (t ? `radix-${t}` : '')
      )
    }
    var on = M((e, t) => {
      let { children: a, ...n } = e,
        r = P.toArray(a),
        l = r.find(fr)
      if (l) {
        let i = l.props.children,
          c = r.map((d) =>
            d === l ? (P.count(i) > 1 ? P.only(null) : H(i) ? i.props.children : null) : d
          )
        return m(Xe, N({}, n, { ref: t }), H(i) ? V(i, void 0, c) : null)
      }
      return m(Xe, N({}, n, { ref: t }), a)
    })
    on.displayName = 'Slot'
    var Xe = M((e, t) => {
      let { children: a, ...n } = e
      return H(a)
        ? V(a, { ...hr(n, a.props), ref: t ? an(t, a.ref) : a.ref })
        : P.count(a) > 1
          ? P.only(null)
          : null
    })
    Xe.displayName = 'SlotClone'
    var pr = ({ children: e }) => m(me, null, e)
    function fr(e) {
      return H(e) && e.type === pr
    }
    function hr(e, t) {
      let a = { ...t }
      for (let n in t) {
        let r = e[n],
          l = t[n]
        ;/^on[A-Z]/.test(n)
          ? r && l
            ? (a[n] = (...i) => {
                ;(l(...i), r(...i))
              })
            : r && (a[n] = r)
          : n === 'style'
            ? (a[n] = { ...r, ...l })
            : n === 'className' && (a[n] = [r, l].filter(Boolean).join(' '))
      }
      return { ...e, ...a }
    }
    var yr = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'span',
        'svg',
        'ul',
      ],
      ln = yr.reduce((e, t) => {
        let a = M((n, r) => {
          let { asChild: l, ...i } = n,
            c = l ? on : t
          return (
            B(() => {
              window[Symbol.for('radix-ui')] = !0
            }, []),
            m(c, N({}, i, { ref: r }))
          )
        })
        return ((a.displayName = `Primitive.${t}`), { ...e, [t]: a })
      }, {})
    function br(e) {
      let t = z(e)
      return (
        B(() => {
          t.current = e
        }),
        j(
          () =>
            (...a) => {
              var n
              return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...a)
            },
          []
        )
      )
    }
    function cn(e) {
      let t = z(e)
      return (
        B(() => {
          t.current = e
        }),
        j(
          () =>
            (...a) => {
              var n
              return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...a)
            },
          []
        )
      )
    }
    function sn({ prop: e, defaultProp: t, onChange: a = () => {} }) {
      let [n, r] = gr({ defaultProp: t, onChange: a }),
        l = e !== void 0,
        i = l ? e : n,
        c = cn(a),
        d = R(
          (s) => {
            if (l) {
              let p = typeof s == 'function' ? s(e) : s
              p !== e && c(p)
            } else r(s)
          },
          [l, e, r, c]
        )
      return [i, d]
    }
    function gr({ defaultProp: e, onChange: t }) {
      let a = F(e),
        [n] = a,
        r = z(n),
        l = cn(t)
      return (
        B(() => {
          r.current !== n && (l(n), (r.current = n))
        }, [n, r, l]),
        a
      )
    }
    var Sr = pe(void 0)
    function un(e) {
      let t = ve(Sr)
      return e || t || 'ltr'
    }
    var Be = 'rovingFocusGroup.onEntryFocus',
      vr = { bubbles: !1, cancelable: !0 },
      rt = 'RovingFocusGroup',
      [Qe, dn, Er] = lr(rt),
      [Ir, mn] = at(rt, [Er]),
      [xr, Rr] = Ir(rt),
      Ar = M((e, t) =>
        m(
          Qe.Provider,
          { scope: e.__scopeRovingFocusGroup },
          m(Qe.Slot, { scope: e.__scopeRovingFocusGroup }, m(_r, N({}, e, { ref: t })))
        )
      ),
      _r = M((e, t) => {
        let {
            __scopeRovingFocusGroup: a,
            orientation: n,
            loop: r = !1,
            dir: l,
            currentTabStopId: i,
            defaultCurrentTabStopId: c,
            onCurrentTabStopIdChange: d,
            onEntryFocus: s,
            ...p
          } = e,
          u = z(null),
          f = sr(t, u),
          b = un(l),
          [h = null, I] = sn({ prop: i, defaultProp: c, onChange: d }),
          [v, g] = F(!1),
          A = br(s),
          Y = dn(a),
          C = z(!1),
          [L, _] = F(0)
        return (
          B(() => {
            let x = u.current
            if (x) return (x.addEventListener(Be, A), () => x.removeEventListener(Be, A))
          }, [A]),
          m(
            xr,
            {
              scope: a,
              orientation: n,
              dir: b,
              loop: r,
              currentTabStopId: h,
              onItemFocus: R((x) => I(x), [I]),
              onItemShiftTab: R(() => g(!0), []),
              onFocusableItemAdd: R(() => _((x) => x + 1), []),
              onFocusableItemRemove: R(() => _((x) => x - 1), []),
            },
            m(
              ln.div,
              N({ tabIndex: v || L === 0 ? -1 : 0, 'data-orientation': n }, p, {
                ref: f,
                style: { outline: 'none', ...e.style },
                onMouseDown: ee(e.onMouseDown, () => {
                  C.current = !0
                }),
                onFocus: ee(e.onFocus, (x) => {
                  let U = !C.current
                  if (x.target === x.currentTarget && U && !v) {
                    let q = new CustomEvent(Be, vr)
                    if ((x.currentTarget.dispatchEvent(q), !q.defaultPrevented)) {
                      let te = Y().filter((K) => K.focusable),
                        ne = te.find((K) => K.active),
                        ae = te.find((K) => K.id === h),
                        se = [ne, ae, ...te].filter(Boolean).map((K) => K.ref.current)
                      pn(se)
                    }
                  }
                  C.current = !1
                }),
                onBlur: ee(e.onBlur, () => g(!1)),
              })
            )
          )
        )
      }),
      Tr = 'RovingFocusGroupItem',
      $r = M((e, t) => {
        let {
            __scopeRovingFocusGroup: a,
            focusable: n = !0,
            active: r = !1,
            tabStopId: l,
            ...i
          } = e,
          c = rn(),
          d = l || c,
          s = Rr(Tr, a),
          p = s.currentTabStopId === d,
          u = dn(a),
          { onFocusableItemAdd: f, onFocusableItemRemove: b } = s
        return (
          B(() => {
            if (n) return (f(), () => b())
          }, [n, f, b]),
          m(
            Qe.ItemSlot,
            { scope: a, id: d, focusable: n, active: r },
            m(
              ln.span,
              N({ tabIndex: p ? 0 : -1, 'data-orientation': s.orientation }, i, {
                ref: t,
                onMouseDown: ee(e.onMouseDown, (h) => {
                  n ? s.onItemFocus(d) : h.preventDefault()
                }),
                onFocus: ee(e.onFocus, () => s.onItemFocus(d)),
                onKeyDown: ee(e.onKeyDown, (h) => {
                  if (h.key === 'Tab' && h.shiftKey) {
                    s.onItemShiftTab()
                    return
                  }
                  if (h.target !== h.currentTarget) return
                  let I = wr(h, s.orientation, s.dir)
                  if (I !== void 0) {
                    h.preventDefault()
                    let v = u()
                      .filter((g) => g.focusable)
                      .map((g) => g.ref.current)
                    if (I === 'last') v.reverse()
                    else if (I === 'prev' || I === 'next') {
                      I === 'prev' && v.reverse()
                      let g = v.indexOf(h.currentTarget)
                      v = s.loop ? kr(v, g + 1) : v.slice(g + 1)
                    }
                    setTimeout(() => pn(v))
                  }
                }),
              })
            )
          )
        )
      }),
      Cr = {
        ArrowLeft: 'prev',
        ArrowUp: 'prev',
        ArrowRight: 'next',
        ArrowDown: 'next',
        PageUp: 'first',
        Home: 'first',
        PageDown: 'last',
        End: 'last',
      }
    function Or(e, t) {
      return t !== 'rtl'
        ? e
        : e === 'ArrowLeft'
          ? 'ArrowRight'
          : e === 'ArrowRight'
            ? 'ArrowLeft'
            : e
    }
    function wr(e, t, a) {
      let n = Or(e.key, a)
      if (
        !(t === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(n)) &&
        !(t === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(n))
      )
        return Cr[n]
    }
    function pn(e) {
      let t = document.activeElement
      for (let a of e) if (a === t || (a.focus(), document.activeElement !== t)) return
    }
    function kr(e, t) {
      return e.map((a, n) => e[(t + n) % e.length])
    }
    var Nr = Ar,
      Pr = $r
    function Lr(e, t) {
      typeof e == 'function' ? e(t) : e != null && (e.current = t)
    }
    function Dr(...e) {
      return (t) => e.forEach((a) => Lr(a, t))
    }
    function Mr(...e) {
      return R(Dr(...e), e)
    }
    var Ht = globalThis?.document ? Ee : () => {}
    function Ur(e, t) {
      return dt((a, n) => t[a][n] ?? a, e)
    }
    var fn = (e) => {
      let { present: t, children: a } = e,
        n = Fr(t),
        r = typeof a == 'function' ? a({ present: n.isPresent }) : P.only(a),
        l = Mr(n.ref, r.ref)
      return typeof a == 'function' || n.isPresent ? V(r, { ref: l }) : null
    }
    fn.displayName = 'Presence'
    function Fr(e) {
      let [t, a] = F(),
        n = z({}),
        r = z(e),
        l = z('none'),
        i = e ? 'mounted' : 'unmounted',
        [c, d] = Ur(i, {
          mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
          unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
          unmounted: { MOUNT: 'mounted' },
        })
      return (
        B(() => {
          let s = _e(n.current)
          l.current = c === 'mounted' ? s : 'none'
        }, [c]),
        Ht(() => {
          let s = n.current,
            p = r.current
          if (p !== e) {
            let u = l.current,
              f = _e(s)
            ;(e
              ? d('MOUNT')
              : f === 'none' || s?.display === 'none'
                ? d('UNMOUNT')
                : d(p && u !== f ? 'ANIMATION_OUT' : 'UNMOUNT'),
              (r.current = e))
          }
        }, [e, d]),
        Ht(() => {
          if (t) {
            let s = (u) => {
                let f = _e(n.current).includes(u.animationName)
                u.target === t && f && Mt(() => d('ANIMATION_END'))
              },
              p = (u) => {
                u.target === t && (l.current = _e(n.current))
              }
            return (
              t.addEventListener('animationstart', p),
              t.addEventListener('animationcancel', s),
              t.addEventListener('animationend', s),
              () => {
                ;(t.removeEventListener('animationstart', p),
                  t.removeEventListener('animationcancel', s),
                  t.removeEventListener('animationend', s))
              }
            )
          } else d('ANIMATION_END')
        }, [t, d]),
        {
          isPresent: ['mounted', 'unmountSuspended'].includes(c),
          ref: R((s) => {
            ;(s && (n.current = getComputedStyle(s)), a(s))
          }, []),
        }
      )
    }
    function _e(e) {
      return e?.animationName || 'none'
    }
    function Hr(e, t) {
      typeof e == 'function' ? e(t) : e != null && (e.current = t)
    }
    function Br(...e) {
      return (t) => e.forEach((a) => Hr(a, t))
    }
    var hn = M((e, t) => {
      let { children: a, ...n } = e,
        r = P.toArray(a),
        l = r.find(zr)
      if (l) {
        let i = l.props.children,
          c = r.map((d) =>
            d === l ? (P.count(i) > 1 ? P.only(null) : H(i) ? i.props.children : null) : d
          )
        return m(Ze, N({}, n, { ref: t }), H(i) ? V(i, void 0, c) : null)
      }
      return m(Ze, N({}, n, { ref: t }), a)
    })
    hn.displayName = 'Slot'
    var Ze = M((e, t) => {
      let { children: a, ...n } = e
      return H(a)
        ? V(a, { ...Wr(n, a.props), ref: t ? Br(t, a.ref) : a.ref })
        : P.count(a) > 1
          ? P.only(null)
          : null
    })
    Ze.displayName = 'SlotClone'
    var Gr = ({ children: e }) => m(me, null, e)
    function zr(e) {
      return H(e) && e.type === Gr
    }
    function Wr(e, t) {
      let a = { ...t }
      for (let n in t) {
        let r = e[n],
          l = t[n]
        ;/^on[A-Z]/.test(n)
          ? r && l
            ? (a[n] = (...i) => {
                ;(l(...i), r(...i))
              })
            : r && (a[n] = r)
          : n === 'style'
            ? (a[n] = { ...r, ...l })
            : n === 'className' && (a[n] = [r, l].filter(Boolean).join(' '))
      }
      return { ...e, ...a }
    }
    var jr = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'span',
        'svg',
        'ul',
      ],
      $e = jr.reduce((e, t) => {
        let a = M((n, r) => {
          let { asChild: l, ...i } = n,
            c = l ? hn : t
          return (
            B(() => {
              window[Symbol.for('radix-ui')] = !0
            }, []),
            m(c, N({}, i, { ref: r }))
          )
        })
        return ((a.displayName = `Primitive.${t}`), { ...e, [t]: a })
      }, {}),
      yn = 'Tabs',
      [Yr, Bf] = at(yn, [mn]),
      bn = mn(),
      [Vr, ot] = Yr(yn),
      qr = M((e, t) => {
        let {
            __scopeTabs: a,
            value: n,
            onValueChange: r,
            defaultValue: l,
            orientation: i = 'horizontal',
            dir: c,
            activationMode: d = 'automatic',
            ...s
          } = e,
          p = un(c),
          [u, f] = sn({ prop: n, onChange: r, defaultProp: l })
        return m(
          Vr,
          {
            scope: a,
            baseId: rn(),
            value: u,
            onValueChange: f,
            orientation: i,
            dir: p,
            activationMode: d,
          },
          m($e.div, N({ dir: p, 'data-orientation': i }, s, { ref: t }))
        )
      }),
      Kr = 'TabsList',
      Xr = M((e, t) => {
        let { __scopeTabs: a, loop: n = !0, ...r } = e,
          l = ot(Kr, a),
          i = bn(a)
        return m(
          Nr,
          N({ asChild: !0 }, i, { orientation: l.orientation, dir: l.dir, loop: n }),
          m($e.div, N({ role: 'tablist', 'aria-orientation': l.orientation }, r, { ref: t }))
        )
      }),
      Qr = 'TabsTrigger',
      Zr = M((e, t) => {
        let { __scopeTabs: a, value: n, disabled: r = !1, ...l } = e,
          i = ot(Qr, a),
          c = bn(a),
          d = gn(i.baseId, n),
          s = Sn(i.baseId, n),
          p = n === i.value
        return m(
          Pr,
          N({ asChild: !0 }, c, { focusable: !r, active: p }),
          m(
            $e.button,
            N(
              {
                type: 'button',
                role: 'tab',
                'aria-selected': p,
                'aria-controls': s,
                'data-state': p ? 'active' : 'inactive',
                'data-disabled': r ? '' : void 0,
                disabled: r,
                id: d,
              },
              l,
              {
                ref: t,
                onMouseDown: ee(e.onMouseDown, (u) => {
                  !r && u.button === 0 && u.ctrlKey === !1 ? i.onValueChange(n) : u.preventDefault()
                }),
                onKeyDown: ee(e.onKeyDown, (u) => {
                  ;[' ', 'Enter'].includes(u.key) && i.onValueChange(n)
                }),
                onFocus: ee(e.onFocus, () => {
                  let u = i.activationMode !== 'manual'
                  !p && !r && u && i.onValueChange(n)
                }),
              }
            )
          )
        )
      }),
      Jr = 'TabsContent',
      eo = M((e, t) => {
        let { __scopeTabs: a, value: n, forceMount: r, children: l, ...i } = e,
          c = ot(Jr, a),
          d = gn(c.baseId, n),
          s = Sn(c.baseId, n),
          p = n === c.value,
          u = z(p)
        return (
          B(() => {
            let f = requestAnimationFrame(() => (u.current = !1))
            return () => cancelAnimationFrame(f)
          }, []),
          m(fn, { present: r || p }, ({ present: f }) =>
            m(
              $e.div,
              N(
                {
                  'data-state': p ? 'active' : 'inactive',
                  'data-orientation': c.orientation,
                  role: 'tabpanel',
                  'aria-labelledby': d,
                  hidden: !f,
                  id: s,
                  tabIndex: 0,
                },
                i,
                { ref: t, style: { ...e.style, animationDuration: u.current ? '0s' : void 0 } }
              ),
              f && l
            )
          )
        )
      })
    function gn(e, t) {
      return `${e}-trigger-${t}`
    }
    function Sn(e, t) {
      return `${e}-content-${t}`
    }
    var to = qr,
      no = Xr,
      ao = Zr,
      Bt = eo,
      Gt = E(we)(
        ({ theme: e }) => ({ fontSize: e.typography.size.s1 }),
        ({ language: e }) =>
          e === 'css' && { '.selector ~ span:nth-last-of-type(-n+3)': { display: 'none' } }
      ),
      ro = E.div({ display: 'flex', flexDirection: 'column' }),
      oo = E.div(({ theme: e }) => ({
        display: 'block',
        color: e.textMutedColor,
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        marginTop: -8,
        marginBottom: 12,
        '@container (min-width: 800px)': { display: 'none' },
      })),
      io = E.p({ margin: 0 }),
      lo = E.div({
        display: 'flex',
        flexDirection: 'column',
        padding: '0 15px 20px 15px',
        gap: 20,
      }),
      co = E.div({
        gap: 15,
        '@container (min-width: 800px)': { display: 'grid', gridTemplateColumns: '50% 50%' },
      }),
      zt = E.div(({ theme: e, side: t }) => ({
        display: t === 'left' ? 'flex' : 'none',
        flexDirection: 'column',
        gap: 15,
        margin: t === 'left' ? '15px 0' : 0,
        padding: t === 'left' ? '0 15px' : 0,
        borderLeft: t === 'left' ? `1px solid ${e.color.border}` : 'none',
        '&:focus-visible': {
          outline: 'none',
          borderRadius: 4,
          boxShadow: `0 0 0 1px inset ${e.color.secondary}`,
        },
        '@container (min-width: 800px)': { display: t === 'left' ? 'none' : 'flex' },
      })),
      so = E(re)(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        fontWeight: e.typography.weight.regular,
        color: e.textMutedColor,
        height: 40,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block',
        width: '100%',
        textAlign: 'left',
        padding: '0 12px',
        '&[data-state="active"]': {
          color: e.color.secondary,
          backgroundColor: e.background.hoverable,
        },
      })),
      uo = E.div({ display: 'flex', flexDirection: 'column', gap: 10 }),
      mo = E.div({ display: 'flex', gap: 10 }),
      po = ({ onClick: e }) => {
        let [t, a] = F(!1),
          n = R(() => {
            ;(e(), a(!0))
            let r = setTimeout(() => a(!1), 2e3)
            return () => clearTimeout(r)
          }, [e])
        return o.createElement(
          re,
          { onClick: n },
          t ? o.createElement(vt, null) : o.createElement(xt, null),
          ' ',
          t ? 'Copied' : 'Copy link'
        )
      },
      fo = ({ id: e, item: t, type: a, selection: n, handleSelectionChange: r }) =>
        o.createElement(
          lo,
          { id: e },
          o.createElement(
            ro,
            null,
            o.createElement(oo, null, t.id),
            o.createElement(
              io,
              null,
              Ye(t),
              ' ',
              o.createElement(
                Ie,
                { href: t.helpUrl, target: '_blank', rel: 'noopener noreferrer', withArrow: !0 },
                'Learn how to resolve this violation'
              )
            )
          ),
          o.createElement(
            to,
            { defaultValue: n, orientation: 'vertical', value: n, onValueChange: r, asChild: !0 },
            o.createElement(
              co,
              null,
              o.createElement(
                no,
                { 'aria-label': a },
                t.nodes.map((l, i) => {
                  let c = `${a}.${t.id}.${i + 1}`
                  return o.createElement(
                    me,
                    { key: c },
                    o.createElement(
                      ao,
                      { value: c, asChild: !0 },
                      o.createElement(
                        so,
                        { variant: 'ghost', size: 'medium', id: c },
                        i + 1,
                        '. ',
                        l.html
                      )
                    ),
                    o.createElement(
                      Bt,
                      { value: c, asChild: !0 },
                      o.createElement(zt, { side: 'left' }, Wt(l))
                    )
                  )
                })
              ),
              t.nodes.map((l, i) => {
                let c = `${a}.${t.id}.${i + 1}`
                return o.createElement(
                  Bt,
                  { key: c, value: c, asChild: !0 },
                  o.createElement(zt, { side: 'right' }, Wt(l))
                )
              })
            )
          )
        )
    function Wt(e) {
      let { handleCopyLink: t, handleJumpToElement: a } = nt(),
        { any: n, all: r, none: l, html: i, target: c } = e,
        d = [...n, ...r, ...l]
      return o.createElement(
        o.Fragment,
        null,
        o.createElement(
          uo,
          null,
          d.map((s) =>
            o.createElement(
              'div',
              { key: s.id },
              `${s.message}${/(\.|: [^.]+\.*)$/.test(s.message) ? '' : '.'}`
            )
          )
        ),
        o.createElement(
          mo,
          null,
          o.createElement(
            re,
            { onClick: () => a(e.target.toString()) },
            o.createElement(Tt, null),
            ' Jump to element'
          ),
          o.createElement(po, { onClick: () => t(e.linkPath) })
        ),
        o.createElement(
          Gt,
          { language: 'jsx', wrapLongLines: !0 },
          `/* element */
${i}`
        ),
        o.createElement(
          Gt,
          { language: 'css', wrapLongLines: !0 },
          `/* selector */
${c} {}`
        )
      )
    }
    var ho = { minor: 'neutral', moderate: 'warning', serious: 'negative', critical: 'critical' },
      yo = { minor: 'Minor', moderate: 'Moderate', serious: 'Serious', critical: 'Critical' },
      bo = E.div(({ theme: e }) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderBottom: `1px solid ${e.appBorderColor}`,
        containerType: 'inline-size',
        fontSize: e.typography.size.s2,
      })),
      go = E(Et)({ transition: 'transform 0.1s ease-in-out' }),
      So = E.div(({ theme: e }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 6,
        padding: '6px 10px 6px 15px',
        minHeight: 40,
        background: 'none',
        color: 'inherit',
        textAlign: 'left',
        cursor: 'pointer',
        width: '100%',
        '&:hover': { color: e.color.secondary },
      })),
      vo = E.div(({ theme: e }) => ({
        display: 'flex',
        alignItems: 'baseline',
        flexGrow: 1,
        fontSize: e.typography.size.s2,
        gap: 8,
      })),
      Eo = E.div(({ theme: e }) => ({
        display: 'none',
        color: e.textMutedColor,
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        '@container (min-width: 800px)': { display: 'block' },
      })),
      Io = E.div(({ theme: e }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: e.textMutedColor,
        width: 28,
        height: 28,
      })),
      Ge = ({
        items: e,
        empty: t,
        type: a,
        handleSelectionChange: n,
        selectedItems: r,
        toggleOpen: l,
      }) =>
        o.createElement(
          o.Fragment,
          null,
          e && e.length
            ? e.map((i) => {
                let c = `${a}.${i.id}`,
                  d = `details:${c}`,
                  s = r.get(c),
                  p = je(i)
                return o.createElement(
                  bo,
                  { key: c },
                  o.createElement(
                    So,
                    { onClick: (u) => l(u, a, i), 'data-active': !!s },
                    o.createElement(
                      vo,
                      null,
                      o.createElement('strong', null, p),
                      o.createElement(Eo, null, i.id)
                    ),
                    i.impact &&
                      o.createElement(
                        ie,
                        { status: a === W.PASS ? 'neutral' : ho[i.impact] },
                        yo[i.impact]
                      ),
                    o.createElement(Io, null, i.nodes.length),
                    o.createElement(
                      le,
                      {
                        onClick: (u) => l(u, a, i),
                        'aria-label': `${s ? 'Collapse' : 'Expand'} details for ${p}`,
                        'aria-expanded': !!s,
                        'aria-controls': d,
                      },
                      o.createElement(go, { style: { transform: `rotate(${s ? -180 : 0}deg)` } })
                    )
                  ),
                  s
                    ? o.createElement(fo, {
                        id: d,
                        item: i,
                        type: a,
                        selection: s,
                        handleSelectionChange: n,
                      })
                    : o.createElement('div', { id: d })
                )
              })
            : o.createElement(Ce, { title: t })
        ),
      Je = function (e, t) {
        return (
          (Je =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (a, n) {
                a.__proto__ = n
              }) ||
            function (a, n) {
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (a[r] = n[r])
            }),
          Je(e, t)
        )
      }
    function xo(e, t) {
      if (typeof t != 'function' && t !== null)
        throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null')
      Je(e, t)
      function a() {
        this.constructor = e
      }
      e.prototype = t === null ? Object.create(t) : ((a.prototype = t.prototype), new a())
    }
    var et = function () {
      return (
        (et =
          Object.assign ||
          function (e) {
            for (var t, a = 1, n = arguments.length; a < n; a++) {
              t = arguments[a]
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
          }),
        et.apply(this, arguments)
      )
    }
    function Ro(e, t) {
      var a = {}
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n])
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (a[n[r]] = e[n[r]])
      return a
    }
    var Te =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u' || typeof window < 'u'
          ? window
          : typeof self < 'u'
            ? self
            : {}
    function Ao(e) {
      var t = typeof e
      return e != null && (t == 'object' || t == 'function')
    }
    var it = Ao,
      _o = typeof Te == 'object' && Te && Te.Object === Object && Te,
      To = _o,
      $o = To,
      Co = typeof self == 'object' && self && self.Object === Object && self,
      Oo = $o || Co || Function('return this')(),
      vn = Oo,
      wo = vn,
      ko = function () {
        return wo.Date.now()
      },
      No = ko,
      Po = /\s/
    function Lo(e) {
      for (var t = e.length; t-- && Po.test(e.charAt(t)); );
      return t
    }
    var Do = Lo,
      Mo = Do,
      Uo = /^\s+/
    function Fo(e) {
      return e && e.slice(0, Mo(e) + 1).replace(Uo, '')
    }
    var Ho = Fo,
      Bo = vn,
      Go = Bo.Symbol,
      En = Go,
      jt = En,
      In = Object.prototype,
      zo = In.hasOwnProperty,
      Wo = In.toString,
      he = jt ? jt.toStringTag : void 0
    function jo(e) {
      var t = zo.call(e, he),
        a = e[he]
      try {
        e[he] = void 0
        var n = !0
      } catch {}
      var r = Wo.call(e)
      return (n && (t ? (e[he] = a) : delete e[he]), r)
    }
    var Yo = jo,
      Vo = Object.prototype,
      qo = Vo.toString
    function Ko(e) {
      return qo.call(e)
    }
    var Xo = Ko,
      Yt = En,
      Qo = Yo,
      Zo = Xo,
      Jo = '[object Null]',
      ei = '[object Undefined]',
      Vt = Yt ? Yt.toStringTag : void 0
    function ti(e) {
      return e == null ? (e === void 0 ? ei : Jo) : Vt && Vt in Object(e) ? Qo(e) : Zo(e)
    }
    var ni = ti
    function ai(e) {
      return e != null && typeof e == 'object'
    }
    var ri = ai,
      oi = ni,
      ii = ri,
      li = '[object Symbol]'
    function ci(e) {
      return typeof e == 'symbol' || (ii(e) && oi(e) == li)
    }
    var si = ci,
      ui = Ho,
      qt = it,
      di = si,
      Kt = NaN,
      mi = /^[-+]0x[0-9a-f]+$/i,
      pi = /^0b[01]+$/i,
      fi = /^0o[0-7]+$/i,
      hi = parseInt
    function yi(e) {
      if (typeof e == 'number') return e
      if (di(e)) return Kt
      if (qt(e)) {
        var t = typeof e.valueOf == 'function' ? e.valueOf() : e
        e = qt(t) ? t + '' : t
      }
      if (typeof e != 'string') return e === 0 ? e : +e
      e = ui(e)
      var a = pi.test(e)
      return a || fi.test(e) ? hi(e.slice(2), a ? 2 : 8) : mi.test(e) ? Kt : +e
    }
    var bi = yi,
      gi = it,
      ze = No,
      Xt = bi,
      Si = 'Expected a function',
      vi = Math.max,
      Ei = Math.min
    function Ii(e, t, a) {
      var n,
        r,
        l,
        i,
        c,
        d,
        s = 0,
        p = !1,
        u = !1,
        f = !0
      if (typeof e != 'function') throw new TypeError(Si)
      ;((t = Xt(t) || 0),
        gi(a) &&
          ((p = !!a.leading),
          (u = 'maxWait' in a),
          (l = u ? vi(Xt(a.maxWait) || 0, t) : l),
          (f = 'trailing' in a ? !!a.trailing : f)))
      function b(_) {
        var x = n,
          U = r
        return ((n = r = void 0), (s = _), (i = e.apply(U, x)), i)
      }
      function h(_) {
        return ((s = _), (c = setTimeout(g, t)), p ? b(_) : i)
      }
      function I(_) {
        var x = _ - d,
          U = _ - s,
          q = t - x
        return u ? Ei(q, l - U) : q
      }
      function v(_) {
        var x = _ - d,
          U = _ - s
        return d === void 0 || x >= t || x < 0 || (u && U >= l)
      }
      function g() {
        var _ = ze()
        if (v(_)) return A(_)
        c = setTimeout(g, I(_))
      }
      function A(_) {
        return ((c = void 0), f && n ? b(_) : ((n = r = void 0), i))
      }
      function Y() {
        ;(c !== void 0 && clearTimeout(c), (s = 0), (n = d = r = c = void 0))
      }
      function C() {
        return c === void 0 ? i : A(ze())
      }
      function L() {
        var _ = ze(),
          x = v(_)
        if (((n = arguments), (r = this), (d = _), x)) {
          if (c === void 0) return h(d)
          if (u) return (clearTimeout(c), (c = setTimeout(g, t)), b(d))
        }
        return (c === void 0 && (c = setTimeout(g, t)), i)
      }
      return ((L.cancel = Y), (L.flush = C), L)
    }
    var xn = Ii,
      xi = xn,
      Ri = it,
      Ai = 'Expected a function'
    function _i(e, t, a) {
      var n = !0,
        r = !0
      if (typeof e != 'function') throw new TypeError(Ai)
      return (
        Ri(a) && ((n = 'leading' in a ? !!a.leading : n), (r = 'trailing' in a ? !!a.trailing : r)),
        xi(e, t, { leading: n, maxWait: t, trailing: r })
      )
    }
    var Ti = _i,
      Rn = function (e, t, a, n) {
        switch (t) {
          case 'debounce':
            return xn(e, a, n)
          case 'throttle':
            return Ti(e, a, n)
          default:
            return e
        }
      },
      tt = function (e) {
        return typeof e == 'function'
      },
      oe = function () {
        return typeof window > 'u'
      },
      Qt = function (e) {
        return e instanceof Element || e instanceof HTMLDocument
      },
      An = function (e, t, a, n) {
        return function (r) {
          var l = r.width,
            i = r.height
          t(function (c) {
            return (c.width === l && c.height === i) ||
              (c.width === l && !n) ||
              (c.height === i && !a)
              ? c
              : (e && tt(e) && e(l, i), { width: l, height: i })
          })
        }
      }
    ;(function (e) {
      xo(t, e)
      function t(a) {
        var n = e.call(this, a) || this
        ;((n.cancelHandler = function () {
          n.resizeHandler &&
            n.resizeHandler.cancel &&
            (n.resizeHandler.cancel(), (n.resizeHandler = null))
        }),
          (n.attachObserver = function () {
            var s = n.props,
              p = s.targetRef,
              u = s.observerOptions
            if (!oe()) {
              p && p.current && (n.targetRef.current = p.current)
              var f = n.getElement()
              f &&
                ((n.observableElement && n.observableElement === f) ||
                  ((n.observableElement = f), n.resizeObserver.observe(f, u)))
            }
          }),
          (n.getElement = function () {
            var s = n.props,
              p = s.querySelector,
              u = s.targetDomEl
            if (oe()) return null
            if (p) return document.querySelector(p)
            if (u && Qt(u)) return u
            if (n.targetRef && Qt(n.targetRef.current)) return n.targetRef.current
            var f = Dt(n)
            if (!f) return null
            var b = n.getRenderType()
            switch (b) {
              case 'renderProp':
                return f
              case 'childFunction':
                return f
              case 'child':
                return f
              case 'childArray':
                return f
              default:
                return f.parentElement
            }
          }),
          (n.createResizeHandler = function (s) {
            var p = n.props,
              u = p.handleWidth,
              f = u === void 0 ? !0 : u,
              b = p.handleHeight,
              h = b === void 0 ? !0 : b,
              I = p.onResize
            if (!(!f && !h)) {
              var v = An(I, n.setState.bind(n), f, h)
              s.forEach(function (g) {
                var A = (g && g.contentRect) || {},
                  Y = A.width,
                  C = A.height,
                  L = !n.skipOnMount && !oe()
                ;(L && v({ width: Y, height: C }), (n.skipOnMount = !1))
              })
            }
          }),
          (n.getRenderType = function () {
            var s = n.props,
              p = s.render,
              u = s.children
            return tt(p)
              ? 'renderProp'
              : tt(u)
                ? 'childFunction'
                : H(u)
                  ? 'child'
                  : Array.isArray(u)
                    ? 'childArray'
                    : 'parent'
          }))
        var r = a.skipOnMount,
          l = a.refreshMode,
          i = a.refreshRate,
          c = i === void 0 ? 1e3 : i,
          d = a.refreshOptions
        return (
          (n.state = { width: void 0, height: void 0 }),
          (n.skipOnMount = r),
          (n.targetRef = st()),
          (n.observableElement = null),
          oe() ||
            ((n.resizeHandler = Rn(n.createResizeHandler, l, c, d)),
            (n.resizeObserver = new window.ResizeObserver(n.resizeHandler))),
          n
        )
      }
      return (
        (t.prototype.componentDidMount = function () {
          this.attachObserver()
        }),
        (t.prototype.componentDidUpdate = function () {
          this.attachObserver()
        }),
        (t.prototype.componentWillUnmount = function () {
          oe() ||
            ((this.observableElement = null),
            this.resizeObserver.disconnect(),
            this.cancelHandler())
        }),
        (t.prototype.render = function () {
          var a = this.props,
            n = a.render,
            r = a.children,
            l = a.nodeType,
            i = l === void 0 ? 'div' : l,
            c = this.state,
            d = c.width,
            s = c.height,
            p = { width: d, height: s, targetRef: this.targetRef },
            u = this.getRenderType(),
            f
          switch (u) {
            case 'renderProp':
              return n && n(p)
            case 'childFunction':
              return ((f = r), f(p))
            case 'child':
              if (((f = r), f.type && typeof f.type == 'string')) {
                p.targetRef
                var b = Ro(p, ['targetRef'])
                return V(f, b)
              }
              return V(f, p)
            case 'childArray':
              return (
                (f = r),
                f.map(function (h) {
                  return !!h && V(h, p)
                })
              )
            default:
              return m(i, null)
          }
        }),
        t
      )
    })(ct)
    var $i = oe() ? B : Ee
    function Ci(e) {
      e === void 0 && (e = {})
      var t = e.skipOnMount,
        a = t === void 0 ? !1 : t,
        n = e.refreshMode,
        r = e.refreshRate,
        l = r === void 0 ? 1e3 : r,
        i = e.refreshOptions,
        c = e.handleWidth,
        d = c === void 0 ? !0 : c,
        s = e.handleHeight,
        p = s === void 0 ? !0 : s,
        u = e.targetRef,
        f = e.observerOptions,
        b = e.onResize,
        h = z(a),
        I = z(null),
        v = u ?? I,
        g = z(),
        A = F({ width: void 0, height: void 0 }),
        Y = A[0],
        C = A[1]
      return (
        $i(
          function () {
            if (!oe()) {
              var L = An(b, C, d, p),
                _ = function (U) {
                  ;(!d && !p) ||
                    U.forEach(function (q) {
                      var te = (q && q.contentRect) || {},
                        ne = te.width,
                        ae = te.height,
                        se = !h.current && !oe()
                      ;(se && L({ width: ne, height: ae }), (h.current = !1))
                    })
                }
              g.current = Rn(_, n, l, i)
              var x = new window.ResizeObserver(g.current)
              return (
                v.current && x.observe(v.current, f),
                function () {
                  x.disconnect()
                  var U = g.current
                  U && U.cancel && U.cancel()
                }
              )
            }
          },
          [n, l, i, d, p, b, f, v.current]
        ),
        et({ ref: v }, Y)
      )
    }
    var Oi = E.div({ width: '100%', position: 'relative', minHeight: '100%' }),
      wi = E.button(
        ({ theme: e }) => ({
          textDecoration: 'none',
          padding: '10px 15px',
          cursor: 'pointer',
          color: e.textMutedColor,
          fontWeight: e.typography.weight.bold,
          fontSize: e.typography.size.s2 - 1,
          lineHeight: 1,
          height: 40,
          border: 'none',
          borderBottom: '3px solid transparent',
          background: 'transparent',
          '&:focus': { outline: '0 none', borderColor: e.color.secondary },
        }),
        ({ active: e, theme: t }) =>
          e ? { opacity: 1, color: t.color.secondary, borderColor: t.color.secondary } : {}
      ),
      ki = E.div(({ theme: e }) => ({
        boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
        background: e.background.app,
        position: 'sticky',
        top: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        overflow: 'auto',
        paddingRight: 10,
        gap: 6,
        scrollbarColor: `${e.barTextColor} ${e.background.app}`,
        scrollbarWidth: 'thin',
      })),
      Ni = E.div({}),
      Pi = E.div({
        display: 'flex',
        flexBasis: '100%',
        justifyContent: 'flex-end',
        containerType: 'inline-size',
        minWidth: 96,
        gap: 6,
      }),
      Li = E(le)({ '@container (max-width: 193px)': { span: { display: 'none' } } }),
      Di = ({ tabs: e }) => {
        let { ref: t } = Ci({ refreshMode: 'debounce', handleHeight: !1, handleWidth: !0 }),
          {
            tab: a,
            setTab: n,
            toggleHighlight: r,
            highlighted: l,
            handleManual: i,
            allExpanded: c,
            handleCollapseAll: d,
            handleExpandAll: s,
          } = nt(),
          p = R(
            (u) => {
              n(u.currentTarget.getAttribute('data-type'))
            },
            [n]
          )
        return m(
          Oi,
          { ref: t },
          m(
            ki,
            null,
            m(
              Ni,
              { role: 'tablist' },
              e.map((u, f) =>
                m(
                  wi,
                  {
                    role: 'tab',
                    key: f,
                    'data-type': u.type,
                    'data-active': a === u.type,
                    'aria-selected': a === u.type,
                    active: a === u.type,
                    onClick: p,
                  },
                  u.label
                )
              )
            ),
            m(
              Pi,
              null,
              m(
                de,
                {
                  as: 'div',
                  hasChrome: !1,
                  placement: 'top',
                  tooltip: m(fe, { note: 'Highlight elements with accessibility violations' }),
                  trigger: 'hover',
                },
                m(
                  Li,
                  { onClick: r, active: l },
                  l ? m(At, null) : m(_t, null),
                  m('span', null, l ? 'Hide highlights' : 'Show highlights')
                )
              ),
              m(
                de,
                {
                  as: 'div',
                  hasChrome: !1,
                  placement: 'top',
                  tooltip: m(fe, { note: c ? 'Collapse all' : 'Expand all' }),
                  trigger: 'hover',
                },
                m(
                  le,
                  { onClick: c ? d : s, 'aria-label': c ? 'Collapse all' : 'Expand all' },
                  c ? m(It, null) : m(Rt, null)
                )
              ),
              m(
                de,
                {
                  as: 'div',
                  hasChrome: !1,
                  placement: 'top',
                  tooltip: m(fe, { note: 'Rerun the accessibility scan' }),
                  trigger: 'hover',
                },
                m(le, { onClick: i, 'aria-label': 'Rerun accessibility scan' }, m(De, null))
              )
            )
          ),
          m(Oe, { vertical: !0, horizontal: !0 }, e.find((u) => u.type === a)?.panel)
        )
      },
      Mi = E.div(({ theme: { color: e, typography: t, background: a } }) => ({
        textAlign: 'start',
        padding: '11px 15px',
        fontSize: `${t.size.s2}px`,
        fontWeight: t.weight.regular,
        lineHeight: '1rem',
        background: a.app,
        borderBottom: `1px solid ${e.border}`,
        color: e.defaultText,
        backgroundClip: 'padding-box',
        position: 'relative',
        code: {
          fontSize: `${t.size.s1 - 1}px`,
          color: 'inherit',
          margin: '0 0.2em',
          padding: '0 0.2em',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '2px',
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
        },
      })),
      Ui = ({ discrepancy: e }) => {
        let t = Re().getDocsUrl({ subpath: Za, versioned: !0, renderer: !0 }),
          a = j(() => {
            switch (e) {
              case 'browserPassedCliFailed':
                return 'Accessibility checks passed in this browser but failed in the CLI.'
              case 'cliPassedBrowserFailed':
                return 'Accessibility checks passed in the CLI but failed in this browser.'
              case 'cliFailedButModeManual':
                return 'Accessibility checks failed in the CLI. Run the tests manually to see the results.'
              default:
                return null
            }
          }, [e])
        return a
          ? o.createElement(
              Mi,
              null,
              a,
              ' ',
              o.createElement(
                Ie,
                { href: t, target: '_blank', withArrow: !0 },
                'Learn what could cause this'
              )
            )
          : null
      },
      Zt = E(De)(({ theme: e }) => ({
        animation: `${e.animation.rotate360} 1s linear infinite;`,
        margin: 4,
      })),
      We = E.div({ display: 'flex', alignItems: 'center', gap: 6 }),
      Jt = E.span(({ theme: e }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: e.typography.size.s2,
        height: '100%',
        gap: 24,
        div: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 },
        p: { margin: 0, color: e.textMutedColor },
        code: {
          display: 'inline-block',
          fontSize: e.typography.size.s2 - 1,
          backgroundColor: e.background.app,
          border: `1px solid ${e.color.border}`,
          borderRadius: 4,
          padding: '2px 3px',
        },
      })),
      Fi = () => {
        let {
            parameters: e,
            tab: t,
            results: a,
            status: n,
            handleManual: r,
            error: l,
            discrepancy: i,
            handleSelectionChange: c,
            selectedItems: d,
            toggleOpen: s,
          } = nt(),
          p = j(() => {
            let {
              passes: u,
              incomplete: f,
              violations: b,
            } = a ?? { passes: [], incomplete: [], violations: [] }
            return [
              {
                label: o.createElement(
                  We,
                  null,
                  'Violations',
                  o.createElement(
                    ie,
                    { compact: !0, status: t === 'violations' ? 'active' : 'neutral' },
                    b.length
                  )
                ),
                panel: o.createElement(Ge, {
                  items: b,
                  type: W.VIOLATION,
                  empty: 'No accessibility violations found.',
                  handleSelectionChange: c,
                  selectedItems: d,
                  toggleOpen: s,
                }),
                items: b,
                type: W.VIOLATION,
              },
              {
                label: o.createElement(
                  We,
                  null,
                  'Passes',
                  o.createElement(
                    ie,
                    { compact: !0, status: t === 'passes' ? 'active' : 'neutral' },
                    u.length
                  )
                ),
                panel: o.createElement(Ge, {
                  items: u,
                  type: W.PASS,
                  empty: 'No passing accessibility checks found.',
                  handleSelectionChange: c,
                  selectedItems: d,
                  toggleOpen: s,
                }),
                items: u,
                type: W.PASS,
              },
              {
                label: o.createElement(
                  We,
                  null,
                  'Inconclusive',
                  o.createElement(
                    ie,
                    { compact: !0, status: t === 'incomplete' ? 'active' : 'neutral' },
                    f.length
                  )
                ),
                panel: o.createElement(Ge, {
                  items: f,
                  type: W.INCOMPLETION,
                  empty: 'No inconclusive accessibility checks found.',
                  handleSelectionChange: c,
                  selectedItems: d,
                  toggleOpen: s,
                }),
                items: f,
                type: W.INCOMPLETION,
              },
            ]
          }, [t, a, c, d, s])
        return e.disable || e.test === 'off'
          ? o.createElement(
              Jt,
              null,
              o.createElement(
                'div',
                null,
                o.createElement('strong', null, 'Accessibility tests are disabled for this story'),
                o.createElement(
                  'p',
                  null,
                  'Update',
                  ' ',
                  o.createElement(
                    'code',
                    null,
                    e.disable ? 'parameters.a11y.disable' : 'parameters.a11y.test'
                  ),
                  ' ',
                  'to enable accessibility tests.'
                )
              )
            )
          : o.createElement(
              o.Fragment,
              null,
              i && o.createElement(Ui, { discrepancy: i }),
              n === 'ready' || n === 'ran'
                ? o.createElement(Di, { key: 'tabs', tabs: p })
                : o.createElement(
                    Jt,
                    { style: { marginTop: i ? '1em' : 0 } },
                    n === 'initial' &&
                      o.createElement(
                        'div',
                        null,
                        o.createElement(Zt, { size: 12 }),
                        o.createElement('strong', null, 'Preparing accessibility scan'),
                        o.createElement('p', null, 'Please wait while the addon is initializing...')
                      ),
                    n === 'manual' &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          'div',
                          null,
                          o.createElement(
                            'strong',
                            null,
                            'Accessibility tests run manually for this story'
                          ),
                          o.createElement(
                            'p',
                            null,
                            'Results will not show when using the testing module. You can still run accessibility tests manually.'
                          )
                        ),
                        o.createElement(
                          re,
                          { size: 'medium', onClick: r },
                          'Run accessibility scan'
                        ),
                        o.createElement(
                          'p',
                          null,
                          'Update ',
                          o.createElement('code', null, 'globals.a11y.manual'),
                          ' to disable manual mode.'
                        )
                      ),
                    n === 'running' &&
                      o.createElement(
                        'div',
                        null,
                        o.createElement(Zt, { size: 12 }),
                        o.createElement('strong', null, 'Accessibility scan in progress'),
                        o.createElement(
                          'p',
                          null,
                          'Please wait while the accessibility scan is running...'
                        )
                      ),
                    n === 'error' &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          'div',
                          null,
                          o.createElement(
                            'strong',
                            null,
                            'The accessibility scan encountered an error'
                          ),
                          o.createElement(
                            'p',
                            null,
                            typeof l == 'string'
                              ? l
                              : l instanceof Error
                                ? l.toString()
                                : JSON.stringify(l, null, 2)
                          )
                        ),
                        o.createElement(
                          re,
                          { size: 'medium', onClick: r },
                          'Rerun accessibility scan'
                        )
                      ),
                    n === 'component-test-error' &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          'div',
                          null,
                          o.createElement('strong', null, "This story's component tests failed"),
                          o.createElement(
                            'p',
                            null,
                            'Automated accessibility tests will not run until this is resolved. You can still test manually.'
                          )
                        ),
                        o.createElement(
                          re,
                          { size: 'medium', onClick: r },
                          'Run accessibility scan'
                        )
                      )
                  )
            )
      },
      Hi = (e) =>
        m(
          'svg',
          { ...e },
          m(
            'defs',
            null,
            m(
              'filter',
              { id: 'protanopia' },
              m('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            m(
              'filter',
              { id: 'protanomaly' },
              m('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            m(
              'filter',
              { id: 'deuteranopia' },
              m('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values: '0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            m(
              'filter',
              { id: 'deuteranomaly' },
              m('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            m(
              'filter',
              { id: 'tritanopia' },
              m('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0',
              })
            ),
            m(
              'filter',
              { id: 'tritanomaly' },
              m('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            m(
              'filter',
              { id: 'achromatopsia' },
              m('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0',
              })
            )
          )
        ),
      Bi = 'storybook-preview-iframe',
      Gi = [
        { name: 'blurred vision', percentage: 22.9 },
        { name: 'deuteranomaly', percentage: 2.7 },
        { name: 'deuteranopia', percentage: 0.56 },
        { name: 'protanomaly', percentage: 0.66 },
        { name: 'protanopia', percentage: 0.59 },
        { name: 'tritanomaly', percentage: 0.01 },
        { name: 'tritanopia', percentage: 0.016 },
        { name: 'achromatopsia', percentage: 1e-4 },
        { name: 'grayscale' },
      ],
      _n = (e) =>
        e
          ? e === 'blurred vision'
            ? 'blur(2px)'
            : e === 'grayscale'
              ? 'grayscale(100%)'
              : `url('#${e}')`
          : 'none',
      zi = E.div({ '&, & svg': { position: 'absolute', width: 0, height: 0 } }),
      Wi = E.span(
        {
          background:
            'linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)',
          borderRadius: '1rem',
          display: 'block',
          height: '1rem',
          width: '1rem',
        },
        ({ filter: e }) => ({ filter: _n(e) }),
        ({ theme: e }) => ({ boxShadow: `${e.appBorderColor} 0 0 0 1px inset` })
      ),
      ji = E.span({ display: 'flex', flexDirection: 'column' }),
      Yi = E.span({ textTransform: 'capitalize' }),
      Vi = E.span(({ theme: e }) => ({ fontSize: 11, color: e.textMutedColor })),
      qi = (e, t) => [
        ...(e !== null
          ? [
              {
                id: 'reset',
                title: 'Reset color filter',
                onClick: () => {
                  t(null)
                },
                right: void 0,
                active: !1,
              },
            ]
          : []),
        ...Gi.map((a) => {
          let n = a.percentage !== void 0 ? `${a.percentage}% of users` : void 0
          return {
            id: a.name,
            title: o.createElement(
              ji,
              null,
              o.createElement(Yi, null, a.name),
              n && o.createElement(Vi, null, n)
            ),
            onClick: () => {
              t(a)
            },
            right: o.createElement(Wi, { filter: a.name }),
            active: e === a,
          }
        }),
      ],
      Ki = () => {
        let [e, t] = F(null)
        return o.createElement(
          o.Fragment,
          null,
          e && o.createElement($t, { styles: { [`#${Bi}`]: { filter: _n(e.name) } } }),
          o.createElement(
            de,
            {
              placement: 'top',
              tooltip: ({ onHide: a }) => {
                let n = qi(e, (r) => {
                  ;(t(r), a())
                })
                return o.createElement(ke, { links: n })
              },
              closeOnOutsideClick: !0,
              onDoubleClick: () => t(null),
            },
            o.createElement(
              le,
              { key: 'filter', active: !!e, title: 'Vision simulator' },
              o.createElement(St, null)
            )
          ),
          o.createElement(zi, null, o.createElement(Hi, null))
        )
      },
      Xi = () => {
        let e = Re().getSelectedPanel(),
          [t] = Le(G),
          a = t?.violations?.length || 0,
          n = t?.incomplete?.length || 0,
          r = a + n
        return o.createElement(
          'div',
          { style: { display: 'flex', alignItems: 'center', gap: 6 } },
          o.createElement('span', null, 'Accessibility'),
          r === 0
            ? null
            : o.createElement(ie, { compact: !0, status: e === Ve ? 'active' : 'neutral' }, r)
        )
      }
    xe.register(G, (e) => {
      ;(xe.add(Ve, {
        title: '',
        type: Pe.TOOL,
        match: ({ viewMode: t, tabId: a }) => t === 'story' && !a,
        render: () => o.createElement(Ki, null),
      }),
        xe.add(Ve, {
          title: Xi,
          type: Pe.PANEL,
          render: ({ active: t = !0 }) =>
            o.createElement(tr, null, t ? o.createElement(Fi, null) : null),
          paramKey: Wa,
        }))
    })
  })()
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e)
}
