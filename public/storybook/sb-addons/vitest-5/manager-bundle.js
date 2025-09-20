try {
  ;(() => {
    var n = __REACT__,
      {
        Children: Ut,
        Component: Nt,
        Fragment: Dt,
        Profiler: Mt,
        PureComponent: jt,
        StrictMode: Gt,
        Suspense: Ht,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ft,
        act: $t,
        cloneElement: zt,
        createContext: Wt,
        createElement: Yt,
        createFactory: Kt,
        createRef: Xt,
        forwardRef: Vt,
        isValidElement: qt,
        lazy: Zt,
        memo: Jt,
        startTransition: Qt,
        unstable_act: en,
        useCallback: U,
        useContext: X,
        useDebugValue: tn,
        useDeferredValue: nn,
        useEffect: N,
        useId: on,
        useImperativeHandle: rn,
        useInsertionEffect: an,
        useLayoutEffect: ln,
        useMemo: V,
        useReducer: cn,
        useRef: q,
        useState: R,
        useSyncExternalStore: sn,
        useTransition: un,
        version: dn,
      } = __REACT__
    var hn = __STORYBOOK_TYPES__,
      { Addon_TypesEnum: Z } = __STORYBOOK_TYPES__
    var vn = __STORYBOOK_API__,
      {
        ActiveTabs: yn,
        Consumer: bn,
        ManagerContext: Cn,
        Provider: _n,
        RequestResponseError: An,
        addons: P,
        combineParameters: wn,
        controlOrMetaKey: On,
        controlOrMetaSymbol: Rn,
        eventMatchesShortcut: Pn,
        eventToShortcut: Bn,
        experimental_MockUniversalStore: xn,
        experimental_UniversalStore: J,
        experimental_getStatusStore: D,
        experimental_getTestProviderStore: Q,
        experimental_requestResponse: kn,
        experimental_useStatusStore: M,
        experimental_useTestProviderStore: ee,
        experimental_useUniversalStore: te,
        internal_fullStatusStore: Ln,
        internal_fullTestProviderStore: Un,
        internal_universalStatusStore: Nn,
        internal_universalTestProviderStore: Dn,
        isMacLike: Mn,
        isShortcutTaken: jn,
        keyToSymbol: Gn,
        merge: Hn,
        mockChannel: Fn,
        optionOrAltSymbol: $n,
        shortcutMatchesShortcut: zn,
        shortcutToHumanString: Wn,
        types: Yn,
        useAddonState: Kn,
        useArgTypes: Xn,
        useArgs: Vn,
        useChannel: qn,
        useGlobalTypes: Zn,
        useGlobals: Jn,
        useParameter: Qn,
        useSharedState: eo,
        useStoryPrepared: to,
        useStorybookApi: ne,
        useStorybookState: no,
      } = __STORYBOOK_API__
    var co = __STORYBOOK_COMPONENTS__,
      {
        A: so,
        ActionBar: io,
        AddonPanel: uo,
        Badge: mo,
        Bar: go,
        Blockquote: Io,
        Button: j,
        ClipboardCode: po,
        Code: ho,
        DL: fo,
        Div: Eo,
        DocumentWrapper: To,
        EmptyTabContent: So,
        ErrorFormatter: vo,
        FlexBar: yo,
        Form: B,
        H1: bo,
        H2: Co,
        H3: _o,
        H4: Ao,
        H5: wo,
        H6: Oo,
        HR: Ro,
        IconButton: f,
        Img: Po,
        LI: Bo,
        Link: G,
        ListItem: x,
        Loader: xo,
        Modal: H,
        OL: ko,
        P: Lo,
        Placeholder: Uo,
        Pre: No,
        ProgressSpinner: oe,
        ResetWrapper: Do,
        ScrollArea: Mo,
        Separator: jo,
        Spaced: Go,
        Span: Ho,
        StorybookIcon: Fo,
        StorybookLogo: $o,
        SyntaxHighlighter: zo,
        TT: Wo,
        TabBar: Yo,
        TabButton: Ko,
        TabWrapper: Xo,
        Table: Vo,
        Tabs: qo,
        TabsState: Zo,
        TooltipLinkList: Jo,
        TooltipMessage: Qo,
        TooltipNote: y,
        UL: er,
        WithTooltip: b,
        WithTooltipPure: tr,
        Zoom: nr,
        codeCommon: or,
        components: rr,
        createCopyToClipboardFunction: ar,
        getStoryHref: lr,
        interleaveSeparators: cr,
        nameSpaceClassNames: sr,
        resetComponents: ir,
        withReset: ur,
      } = __STORYBOOK_COMPONENTS__
    var pr = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: hr,
        AccessibilityIcon: fr,
        AccessibilityIgnoredIcon: Er,
        AddIcon: Tr,
        AdminIcon: Sr,
        AlertAltIcon: vr,
        AlertIcon: yr,
        AlignLeftIcon: br,
        AlignRightIcon: Cr,
        AppleIcon: _r,
        ArrowBottomLeftIcon: Ar,
        ArrowBottomRightIcon: wr,
        ArrowDownIcon: Or,
        ArrowLeftIcon: Rr,
        ArrowRightIcon: Pr,
        ArrowSolidDownIcon: Br,
        ArrowSolidLeftIcon: xr,
        ArrowSolidRightIcon: kr,
        ArrowSolidUpIcon: Lr,
        ArrowTopLeftIcon: Ur,
        ArrowTopRightIcon: Nr,
        ArrowUpIcon: Dr,
        AzureDevOpsIcon: Mr,
        BackIcon: jr,
        BasketIcon: Gr,
        BatchAcceptIcon: Hr,
        BatchDenyIcon: Fr,
        BeakerIcon: $r,
        BellIcon: zr,
        BitbucketIcon: Wr,
        BoldIcon: Yr,
        BookIcon: Kr,
        BookmarkHollowIcon: Xr,
        BookmarkIcon: Vr,
        BottomBarIcon: qr,
        BottomBarToggleIcon: Zr,
        BoxIcon: Jr,
        BranchIcon: Qr,
        BrowserIcon: ea,
        ButtonIcon: ta,
        CPUIcon: na,
        CalendarIcon: oa,
        CameraIcon: ra,
        CameraStabilizeIcon: aa,
        CategoryIcon: la,
        CertificateIcon: ca,
        ChangedIcon: sa,
        ChatIcon: ia,
        CheckIcon: ua,
        ChevronDownIcon: da,
        ChevronLeftIcon: ma,
        ChevronRightIcon: ga,
        ChevronSmallDownIcon: Ia,
        ChevronSmallLeftIcon: pa,
        ChevronSmallRightIcon: ha,
        ChevronSmallUpIcon: fa,
        ChevronUpIcon: Ea,
        ChromaticIcon: Ta,
        ChromeIcon: Sa,
        CircleHollowIcon: va,
        CircleIcon: ya,
        ClearIcon: ba,
        CloseAltIcon: Ca,
        CloseIcon: re,
        CloudHollowIcon: _a,
        CloudIcon: Aa,
        CogIcon: wa,
        CollapseIcon: Oa,
        CommandIcon: Ra,
        CommentAddIcon: Pa,
        CommentIcon: Ba,
        CommentsIcon: xa,
        CommitIcon: ka,
        CompassIcon: La,
        ComponentDrivenIcon: Ua,
        ComponentIcon: Na,
        ContrastIcon: Da,
        ContrastIgnoredIcon: Ma,
        ControlsIcon: ja,
        CopyIcon: Ga,
        CreditIcon: Ha,
        CrossIcon: Fa,
        DashboardIcon: $a,
        DatabaseIcon: za,
        DeleteIcon: Wa,
        DiamondIcon: Ya,
        DirectionIcon: Ka,
        DiscordIcon: Xa,
        DocChartIcon: Va,
        DocListIcon: qa,
        DocumentIcon: Za,
        DownloadIcon: Ja,
        DragIcon: Qa,
        EditIcon: el,
        EllipsisIcon: tl,
        EmailIcon: nl,
        ExpandAltIcon: ol,
        ExpandIcon: rl,
        EyeCloseIcon: al,
        EyeIcon: ae,
        FaceHappyIcon: ll,
        FaceNeutralIcon: cl,
        FaceSadIcon: sl,
        FacebookIcon: il,
        FailedIcon: ul,
        FastForwardIcon: dl,
        FigmaIcon: ml,
        FilterIcon: gl,
        FlagIcon: Il,
        FolderIcon: pl,
        FormIcon: hl,
        GDriveIcon: fl,
        GithubIcon: El,
        GitlabIcon: Tl,
        GlobeIcon: Sl,
        GoogleIcon: vl,
        GraphBarIcon: yl,
        GraphLineIcon: bl,
        GraphqlIcon: Cl,
        GridAltIcon: _l,
        GridIcon: Al,
        GrowIcon: wl,
        HeartHollowIcon: Ol,
        HeartIcon: Rl,
        HomeIcon: Pl,
        HourglassIcon: Bl,
        InfoIcon: le,
        ItalicIcon: xl,
        JumpToIcon: kl,
        KeyIcon: Ll,
        LightningIcon: Ul,
        LightningOffIcon: Nl,
        LinkBrokenIcon: Dl,
        LinkIcon: Ml,
        LinkedinIcon: jl,
        LinuxIcon: Gl,
        ListOrderedIcon: Hl,
        ListUnorderedIcon: Fl,
        LocationIcon: $l,
        LockIcon: zl,
        MarkdownIcon: Wl,
        MarkupIcon: Yl,
        MediumIcon: Kl,
        MemoryIcon: Xl,
        MenuIcon: Vl,
        MergeIcon: ql,
        MirrorIcon: Zl,
        MobileIcon: Jl,
        MoonIcon: Ql,
        NutIcon: ec,
        OutboxIcon: tc,
        OutlineIcon: nc,
        PaintBrushIcon: oc,
        PaperClipIcon: rc,
        ParagraphIcon: ac,
        PassedIcon: lc,
        PhoneIcon: cc,
        PhotoDragIcon: sc,
        PhotoIcon: ic,
        PhotoStabilizeIcon: uc,
        PinAltIcon: dc,
        PinIcon: mc,
        PlayAllHollowIcon: gc,
        PlayBackIcon: Ic,
        PlayHollowIcon: ce,
        PlayIcon: pc,
        PlayNextIcon: hc,
        PlusIcon: fc,
        PointerDefaultIcon: Ec,
        PointerHandIcon: Tc,
        PowerIcon: Sc,
        PrintIcon: vc,
        ProceedIcon: yc,
        ProfileIcon: bc,
        PullRequestIcon: Cc,
        QuestionIcon: _c,
        RSSIcon: Ac,
        RedirectIcon: wc,
        ReduxIcon: Oc,
        RefreshIcon: Rc,
        ReplyIcon: Pc,
        RepoIcon: Bc,
        RequestChangeIcon: xc,
        RewindIcon: kc,
        RulerIcon: Lc,
        SaveIcon: Uc,
        SearchIcon: Nc,
        ShareAltIcon: Dc,
        ShareIcon: Mc,
        ShieldIcon: jc,
        SideBySideIcon: Gc,
        SidebarAltIcon: Hc,
        SidebarAltToggleIcon: Fc,
        SidebarIcon: $c,
        SidebarToggleIcon: zc,
        SpeakerIcon: Wc,
        StackedIcon: Yc,
        StarHollowIcon: Kc,
        StarIcon: Xc,
        StatusFailIcon: Vc,
        StatusIcon: qc,
        StatusPassIcon: Zc,
        StatusWarnIcon: Jc,
        StickerIcon: Qc,
        StopAltHollowIcon: es,
        StopAltIcon: se,
        StopIcon: ts,
        StorybookIcon: ns,
        StructureIcon: os,
        SubtractIcon: rs,
        SunIcon: as,
        SupportIcon: ls,
        SweepIcon: cs,
        SwitchAltIcon: ss,
        SyncIcon: ie,
        TabletIcon: is,
        ThumbsUpIcon: us,
        TimeIcon: ds,
        TimerIcon: ms,
        TransferIcon: gs,
        TrashIcon: Is,
        TwitterIcon: ps,
        TypeIcon: hs,
        UbuntuIcon: fs,
        UndoIcon: Es,
        UnfoldIcon: Ts,
        UnlockIcon: Ss,
        UnpinIcon: vs,
        UploadIcon: ys,
        UserAddIcon: bs,
        UserAltIcon: Cs,
        UserIcon: _s,
        UsersIcon: As,
        VSCodeIcon: ws,
        VerifiedIcon: Os,
        VideoIcon: Rs,
        WandIcon: Ps,
        WatchIcon: Bs,
        WindowsIcon: xs,
        WrenchIcon: ks,
        XIcon: Ls,
        YoutubeIcon: Us,
        ZoomIcon: Ns,
        ZoomOutIcon: Ds,
        ZoomResetIcon: Ms,
        iconList: js,
      } = __STORYBOOK_ICONS__
    var zs = __STORYBOOK_THEMING__,
      {
        CacheProvider: Ws,
        ClassNames: Ys,
        Global: Ks,
        ThemeProvider: Xs,
        background: Vs,
        color: qs,
        convert: Zs,
        create: Js,
        createCache: Qs,
        createGlobal: ei,
        createReset: ti,
        css: ni,
        darken: oi,
        ensure: ri,
        ignoreSsrWarning: ai,
        isPropValid: li,
        jsx: ci,
        keyframes: si,
        lighten: ii,
        styled: I,
        themes: ui,
        typography: di,
        useTheme: mi,
        withTheme: gi,
      } = __STORYBOOK_THEMING__
    var Re = 'storybook/interactions',
      Ee = `${Re}/panel`,
      Te = 'storybook/a11y',
      Se = `${Te}/panel`,
      O = 'storybook/test',
      Pe = `${O}/test-provider`,
      Be = 'writing-tests/integrations/vitest-addon',
      xe = `${Be}#what-happens-if-vitest-itself-has-an-error`,
      ke = {
        id: O,
        initialState: {
          config: { coverage: !1, a11y: !1 },
          watching: !1,
          cancelling: !1,
          fatalError: void 0,
          indexUrl: void 0,
          previewAnnotations: [],
          currentRun: {
            triggeredBy: void 0,
            config: { coverage: !1, a11y: !1 },
            componentTestCount: { success: 0, error: 0 },
            a11yCount: { success: 0, warning: 0, error: 0 },
            storyIds: void 0,
            totalTestCount: void 0,
            startedAt: void 0,
            finishedAt: void 0,
            unhandledErrors: [],
            coverageSummary: void 0,
          },
        },
      },
      ue = ['global', 'run-all'],
      ve = 'storybook/component-test',
      ye = 'storybook/a11y',
      E = J.create({ ...ke, leader: globalThis.CONFIG_TYPE === 'PRODUCTION' }),
      Le = D(ve),
      Ue = D(ye),
      be = Q(O),
      Ne = I.div({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px 6px 6px 20px',
      }),
      De = I.div({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }),
      Me = I(H.Title)(({ theme: { typography: e } }) => ({
        fontSize: e.size.s2,
        fontWeight: e.weight.bold,
      })),
      je = I.pre(({ theme: e }) => ({
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        overflow: 'auto',
        maxHeight: '60vh',
        margin: 0,
        padding: '20px',
        fontFamily: e.typography.fonts.mono,
        fontSize: '12px',
        borderTop: `1px solid ${e.appBorderColor}`,
        borderRadius: 0,
      })),
      Ge = I.a(({ theme: e }) => ({ color: e.color.defaultText })),
      W = n.createContext({ isModalOpen: !1, setModalOpen: void 0 })
    function z({ error: e }) {
      return e
        ? n.createElement(
            'div',
            null,
            n.createElement('h4', null, 'Caused by: ', e.name || 'Error', ': ', e.message),
            e.stack && n.createElement('pre', null, e.stack),
            e.cause && n.createElement(z, { error: e.cause })
          )
        : null
    }
    function He({ onRerun: e, storeState: t }) {
      let o = ne(),
        { isModalOpen: c, setModalOpen: u } = X(W),
        r = () => u?.(!1),
        l = o.getDocsUrl({ subpath: xe, versioned: !0, renderer: !0 }),
        {
          fatalError: i,
          currentRun: { unhandledErrors: s },
        } = t,
        g = i
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement('p', null, i.error.name || 'Error'),
              i.message && n.createElement('p', null, i.message),
              i.error.message && n.createElement('p', null, i.error.message),
              i.error.stack && n.createElement('p', null, i.error.stack),
              i.error.cause && n.createElement(z, { error: i.error.cause })
            )
          : s.length > 0
            ? n.createElement(
                'ol',
                null,
                s.map((a) =>
                  n.createElement(
                    'li',
                    { key: a.name + a.message },
                    n.createElement('p', null, a.name, ': ', a.message),
                    a.VITEST_TEST_PATH &&
                      n.createElement(
                        'p',
                        null,
                        'This error originated in "',
                        n.createElement('b', null, a.VITEST_TEST_PATH),
                        `". It doesn't mean the error was thrown inside the file itself, but while it was running.`
                      ),
                    a.VITEST_TEST_NAME &&
                      n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                          'p',
                          null,
                          `The latest test that might've caused the error is "`,
                          n.createElement('b', null, a.VITEST_TEST_NAME),
                          '". It might mean one of the following:'
                        ),
                        n.createElement(
                          'ul',
                          null,
                          n.createElement(
                            'li',
                            null,
                            'The error was thrown, while Vitest was running this test.'
                          ),
                          n.createElement(
                            'li',
                            null,
                            'If the error occurred after the test had been completed, this was the last documented test before it was thrown.'
                          )
                        )
                      ),
                    a.stacks &&
                      n.createElement(
                        n.Fragment,
                        null,
                        n.createElement('p', null, n.createElement('b', null, 'Stacks:')),
                        n.createElement(
                          'ul',
                          null,
                          a.stacks.map((d) =>
                            n.createElement(
                              'li',
                              { key: d.file + d.line + d.column },
                              d.file,
                              ':',
                              d.line,
                              ':',
                              d.column,
                              ' - ',
                              d.method || 'unknown method'
                            )
                          )
                        )
                      ),
                    a.stack && n.createElement('p', null, a.stack),
                    a.cause ? n.createElement(z, { error: a.cause }) : null
                  )
                )
              )
            : null
      return n.createElement(
        H,
        { onEscapeKeyDown: r, onInteractOutside: r, open: c },
        n.createElement(
          Ne,
          null,
          n.createElement(Me, null, 'Storybook Tests error details'),
          n.createElement(
            De,
            null,
            n.createElement(
              j,
              { onClick: e, variant: 'ghost' },
              n.createElement(ie, null),
              'Rerun'
            ),
            n.createElement(
              j,
              { variant: 'ghost', asChild: !0 },
              n.createElement('a', { target: '_blank', href: l, rel: 'noreferrer' }, 'Troubleshoot')
            ),
            n.createElement(
              f,
              { onClick: r, 'aria-label': 'Close modal' },
              n.createElement(re, null)
            )
          )
        ),
        n.createElement(
          je,
          null,
          g,
          n.createElement('br', null),
          n.createElement('br', null),
          'Troubleshoot:',
          ' ',
          n.createElement(Ge, { target: '_blank', href: l }, l)
        )
      )
    }
    function Fe() {}
    function de(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t)
      )
    }
    function me(e) {
      return e == null
        ? e === void 0
          ? '[object Undefined]'
          : '[object Null]'
        : Object.prototype.toString.call(e)
    }
    var $e = '[object RegExp]',
      ze = '[object String]',
      We = '[object Number]',
      Ye = '[object Boolean]',
      ge = '[object Arguments]',
      Ke = '[object Symbol]',
      Xe = '[object Date]',
      Ve = '[object Map]',
      qe = '[object Set]',
      Ze = '[object Array]',
      Je = '[object Function]',
      Qe = '[object ArrayBuffer]',
      F = '[object Object]',
      et = '[object Error]',
      tt = '[object DataView]',
      nt = '[object Uint8Array]',
      ot = '[object Uint8ClampedArray]',
      rt = '[object Uint16Array]',
      at = '[object Uint32Array]',
      lt = '[object BigUint64Array]',
      ct = '[object Int8Array]',
      st = '[object Int16Array]',
      it = '[object Int32Array]',
      ut = '[object BigInt64Array]',
      dt = '[object Float32Array]',
      mt = '[object Float64Array]'
    function Ie(e) {
      if (!e || typeof e != 'object') return !1
      let t = Object.getPrototypeOf(e)
      return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null
        ? Object.prototype.toString.call(e) === '[object Object]'
        : !1
    }
    function gt(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t))
    }
    function It(e, t, o) {
      return A(e, t, void 0, void 0, void 0, void 0, o)
    }
    function A(e, t, o, c, u, r, l) {
      let i = l(e, t, o, c, u, r)
      if (i !== void 0) return i
      if (typeof e == typeof t)
        switch (typeof e) {
          case 'bigint':
          case 'string':
          case 'boolean':
          case 'symbol':
          case 'undefined':
            return e === t
          case 'number':
            return e === t || Object.is(e, t)
          case 'function':
            return e === t
          case 'object':
            return w(e, t, r, l)
        }
      return w(e, t, r, l)
    }
    function w(e, t, o, c) {
      if (Object.is(e, t)) return !0
      let u = me(e),
        r = me(t)
      if ((u === ge && (u = F), r === ge && (r = F), u !== r)) return !1
      switch (u) {
        case ze:
          return e.toString() === t.toString()
        case We: {
          let s = e.valueOf(),
            g = t.valueOf()
          return gt(s, g)
        }
        case Ye:
        case Xe:
        case Ke:
          return Object.is(e.valueOf(), t.valueOf())
        case $e:
          return e.source === t.source && e.flags === t.flags
        case Je:
          return e === t
      }
      o = o ?? new Map()
      let l = o.get(e),
        i = o.get(t)
      if (l != null && i != null) return l === t
      ;(o.set(e, t), o.set(t, e))
      try {
        switch (u) {
          case Ve: {
            if (e.size !== t.size) return !1
            for (let [s, g] of e.entries())
              if (!t.has(s) || !A(g, t.get(s), s, e, t, o, c)) return !1
            return !0
          }
          case qe: {
            if (e.size !== t.size) return !1
            let s = Array.from(e.values()),
              g = Array.from(t.values())
            for (let a = 0; a < s.length; a++) {
              let d = s[a],
                m = g.findIndex((p) => A(d, p, void 0, e, t, o, c))
              if (m === -1) return !1
              g.splice(m, 1)
            }
            return !0
          }
          case Ze:
          case nt:
          case ot:
          case rt:
          case at:
          case lt:
          case ct:
          case st:
          case it:
          case ut:
          case dt:
          case mt: {
            if (
              (typeof Buffer < 'u' && Buffer.isBuffer(e) !== Buffer.isBuffer(t)) ||
              e.length !== t.length
            )
              return !1
            for (let s = 0; s < e.length; s++) if (!A(e[s], t[s], s, e, t, o, c)) return !1
            return !0
          }
          case Qe:
            return e.byteLength !== t.byteLength
              ? !1
              : w(new Uint8Array(e), new Uint8Array(t), o, c)
          case tt:
            return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset
              ? !1
              : w(new Uint8Array(e), new Uint8Array(t), o, c)
          case et:
            return e.name === t.name && e.message === t.message
          case F: {
            if (!(w(e.constructor, t.constructor, o, c) || (Ie(e) && Ie(t)))) return !1
            let s = [...Object.keys(e), ...de(e)],
              g = [...Object.keys(t), ...de(t)]
            if (s.length !== g.length) return !1
            for (let a = 0; a < s.length; a++) {
              let d = s[a],
                m = e[d]
              if (!Object.hasOwn(t, d)) return !1
              let p = t[d]
              if (!A(m, p, d, e, t, o, c)) return !1
            }
            return !0
          }
          default:
            return !1
        }
      } finally {
        ;(o.delete(e), o.delete(t))
      }
    }
    function pt(e, t) {
      return It(e, t, Fe)
    }
    var pe = (e, t, o) => {
        let c = {
          'status-value:pending': [],
          'status-value:success': [],
          'status-value:error': [],
          'status-value:warning': [],
          'status-value:unknown': [],
        }
        return (
          (o ? o.map((u) => e[u]).filter(Boolean) : Object.values(e)).forEach((u) => {
            let r = u[t]
            r && c[r.value].push(r.storyId)
          }),
          c
        )
      },
      Ce = (e, t) => {
        let o = ee((p) => p[O]),
          [c, u] = te(E),
          [r, l] = R(!1),
          i = q()
        N(() => {
          let p = E.onStateChange((C, L) => {
            pt(C.config, L.config) ||
              (be.settingsChanged(),
              l(!0),
              clearTimeout(i.current),
              (i.current = setTimeout(() => {
                l(!1)
              }, 1e3)))
          })
          return () => {
            ;(p(), clearTimeout(i.current))
          }
        }, [])
        let s = V(() => (t ? e.findAllLeafStoryIds(t) : void 0), [t, e]),
          g = U((p) => pe(p, ve, s), [s]),
          a = M(g),
          d = U((p) => pe(p, ye, s), [s]),
          m = M(d)
        return {
          storeState: c,
          setStoreState: u,
          testProviderState: o,
          componentTestStatusValueToStoryIds: a,
          a11yStatusValueToStoryIds: m,
          isSettingsUpdated: r,
        }
      },
      ht = ({ timestamp: e }) => {
        let [t, o] = R(null)
        if (
          (N(() => {
            if (e) {
              o(Date.now() - e)
              let i = setInterval(() => o(Date.now() - e), 1e4)
              return () => clearInterval(i)
            }
          }, [e]),
          t === null)
        )
          return null
        let c = Math.round(t / 1e3)
        if (c < 60) return 'just now'
        let u = Math.floor(c / 60)
        if (u < 60) return u === 1 ? 'a minute ago' : `${u} minutes ago`
        let r = Math.floor(u / 60)
        if (r < 24) return r === 1 ? 'an hour ago' : `${r} hours ago`
        let l = Math.floor(r / 24)
        return l === 1 ? 'yesterday' : `${l} days ago`
      },
      ft = I.div(({ theme: e }) => ({
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: e.typography.size.s1,
        color: e.textMutedColor,
      })),
      Et = I.span(({ theme: e }) => ({ color: e.color.positiveText }))
    function Tt({ entryId: e, storeState: t, testProviderState: o, isSettingsUpdated: c, ...u }) {
      let { setModalOpen: r } = n.useContext(W),
        {
          componentTestCount: l,
          totalTestCount: i,
          unhandledErrors: s,
          finishedAt: g,
        } = t.currentRun,
        a = l.success + l.error,
        d = 'Not run'
      if (!e && c) d = n.createElement(Et, null, 'Settings updated')
      else if (o === 'test-provider-state:running')
        d = (a ?? 0) === 0 ? 'Starting...' : `Testing... ${a}/${i}`
      else if (!e && o === 'test-provider-state:crashed')
        d = r
          ? n.createElement(G, { isButton: !0, onClick: () => r(!0) }, 'View full error')
          : 'Crashed'
      else if (!e && s.length > 0) {
        let m = `View ${s.length} unhandled error${s?.length > 1 ? 's' : ''}`
        d = r ? n.createElement(G, { isButton: !0, onClick: () => r(!0) }, m) : m
      } else
        e && i
          ? (d = `Ran ${i} ${i === 1 ? 'test' : 'tests'}`)
          : g
            ? (d = n.createElement(
                n.Fragment,
                null,
                'Ran ',
                i,
                ' ',
                i === 1 ? 'test' : 'tests',
                ' ',
                n.createElement(ht, { timestamp: g })
              ))
            : t.watching && (d = 'Watching for file changes')
      return n.createElement(ft, { ...u }, d)
    }
    var k = I.div(
        ({ percentage: e }) => ({
          width: e ? 12 : 6,
          height: e ? 12 : 6,
          margin: e ? 1 : 4,
          background: e
            ? `conic-gradient(var(--status-color) ${e}%, var(--status-background) ${e + 1}%)`
            : 'var(--status-color)',
          borderRadius: '50%',
        }),
        ({ isRunning: e, theme: t }) =>
          e && { animation: `${t.animation.glow} 1.5s ease-in-out infinite` },
        ({ status: e, theme: t }) =>
          e === 'positive' && {
            '--status-color': t.color.positive,
            '--status-background': `${t.color.positive}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'warning' && {
            '--status-color': t.color.gold,
            '--status-background': `${t.color.gold}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'negative' && {
            '--status-color': t.color.negative,
            '--status-background': `${t.color.negative}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'critical' && {
            '--status-color': t.color.defaultText,
            '--status-background': `${t.color.defaultText}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'unknown' && {
            '--status-color': t.color.mediumdark,
            '--status-background': `${t.color.mediumdark}66`,
          }
      ),
      St = I.div({ display: 'flex', flexDirection: 'column' }),
      vt = I.div({ display: 'flex', justifyContent: 'space-between', padding: '8px 0', gap: 12 }),
      yt = I.div({ display: 'flex', flexDirection: 'column', marginLeft: 8, minWidth: 0 }),
      he = I.div(({ crashed: e, theme: t }) => ({
        fontSize: t.typography.size.s1,
        fontWeight: e ? 'bold' : 'normal',
        color: e ? t.color.negativeText : t.color.defaultText,
      })),
      bt = I.div({ display: 'flex', gap: 4 }),
      Ct = I.div({ marginBottom: 2 }),
      _t = I.span(({ theme: e }) => ({ color: e.textMutedColor })),
      At = I(oe)({ margin: 4 }),
      $ = I.div({ display: 'flex', gap: 4 }),
      wt = I(se)({ width: 10 }),
      fe = ({ api: e, panelId: t, entryId: o }) => {
        let c = o ? e.findAllLeafStoryIds(o)[0] : void 0
        ;(c && e.selectStory(c), e.setSelectedPanel(t), e.togglePanel(!0))
      },
      _e = ({
        api: e,
        entry: t,
        testProviderState: o,
        storeState: c,
        setStoreState: u,
        componentTestStatusValueToStoryIds: r,
        a11yStatusValueToStoryIds: l,
        isSettingsUpdated: i,
        ...s
      }) => {
        let { config: g, watching: a, cancelling: d, currentRun: m, fatalError: p } = c,
          C = m.componentTestCount.success + m.componentTestCount.error,
          L = P.experimental_getRegisteredAddons().includes(Te),
          h = o === 'test-provider-state:running',
          Ae = h && C === 0,
          [we, Y] = p
            ? ['critical', 'Component tests crashed']
            : r['status-value:error'].length > 0
              ? ['negative', 'Component tests failed']
              : h
                ? ['unknown', 'Testing in progress']
                : r['status-value:success'].length > 0
                  ? ['positive', 'Component tests passed']
                  : ['unknown', 'Run tests to see results'],
          [Oe, K] = p
            ? ['critical', 'Component tests crashed']
            : l['status-value:error'].length > 0
              ? ['negative', 'Accessibility tests failed']
              : l['status-value:warning'].length > 0
                ? ['warning', 'Accessibility tests failed']
                : h
                  ? ['unknown', 'Testing in progress']
                  : l['status-value:success'].length > 0
                    ? ['positive', 'Accessibility tests passed']
                    : ['unknown', 'Run tests to see accessibility results']
        return n.createElement(
          St,
          { ...s },
          n.createElement(
            vt,
            null,
            n.createElement(
              yt,
              null,
              t
                ? n.createElement(he, { id: 'testing-module-title' }, 'Run component tests')
                : n.createElement(
                    he,
                    {
                      id: 'testing-module-title',
                      crashed:
                        o === 'test-provider-state:crashed' ||
                        p !== void 0 ||
                        m.unhandledErrors.length > 0,
                    },
                    m.unhandledErrors.length === 1
                      ? 'Component tests completed with an error'
                      : m.unhandledErrors.length > 1
                        ? 'Component tests completed with errors'
                        : p
                          ? 'Component tests didn\u2019t complete'
                          : 'Run component tests'
                  ),
              n.createElement(Tt, {
                id: 'testing-module-description',
                storeState: c,
                testProviderState: o,
                entryId: t?.id,
                isSettingsUpdated: i,
              })
            ),
            n.createElement(
              bt,
              null,
              !t &&
                n.createElement(
                  b,
                  {
                    hasChrome: !1,
                    trigger: 'hover',
                    tooltip: n.createElement(y, { note: `${a ? 'Disable' : 'Enable'} watch mode` }),
                  },
                  n.createElement(
                    f,
                    {
                      'aria-label': `${a ? 'Disable' : 'Enable'} watch mode`,
                      size: 'medium',
                      active: a,
                      onClick: () => E.send({ type: 'TOGGLE_WATCHING', payload: { to: !a } }),
                      disabled: h,
                    },
                    n.createElement(ae, null)
                  )
                ),
              h
                ? n.createElement(
                    b,
                    {
                      hasChrome: !1,
                      trigger: 'hover',
                      tooltip: n.createElement(y, { note: d ? 'Stopping...' : 'Stop test run' }),
                    },
                    n.createElement(
                      f,
                      {
                        'aria-label': d ? 'Stopping...' : 'Stop test run',
                        padding: 'none',
                        size: 'medium',
                        onClick: () => E.send({ type: 'CANCEL_RUN' }),
                        disabled: d || Ae,
                      },
                      n.createElement(
                        At,
                        {
                          percentage:
                            C && c.currentRun.totalTestCount
                              ? (C / c.currentRun.totalTestCount) * 100
                              : void 0,
                        },
                        n.createElement(wt, null)
                      )
                    )
                  )
                : n.createElement(
                    b,
                    {
                      hasChrome: !1,
                      trigger: 'hover',
                      tooltip: n.createElement(y, { note: 'Start test run' }),
                    },
                    n.createElement(
                      f,
                      {
                        'aria-label': 'Start test run',
                        size: 'medium',
                        onClick: () =>
                          E.send({
                            type: 'TRIGGER_RUN',
                            payload: {
                              storyIds: t ? e.findAllLeafStoryIds(t.id) : void 0,
                              triggeredBy: t ? t.type : 'global',
                            },
                          }),
                      },
                      n.createElement(ce, null)
                    )
                  )
            )
          ),
          n.createElement(
            Ct,
            null,
            n.createElement(
              $,
              null,
              n.createElement(x, {
                as: 'label',
                title: 'Interactions',
                icon: t ? null : n.createElement(B.Checkbox, { checked: !0, disabled: !0 }),
              }),
              n.createElement(
                b,
                { hasChrome: !1, trigger: 'hover', tooltip: n.createElement(y, { note: Y }) },
                n.createElement(
                  f,
                  {
                    size: 'medium',
                    disabled:
                      r['status-value:error'].length === 0 &&
                      r['status-value:warning'].length === 0 &&
                      r['status-value:success'].length === 0,
                    onClick: () => {
                      fe({
                        api: e,
                        panelId: Ee,
                        entryId:
                          r['status-value:error'][0] ??
                          r['status-value:warning'][0] ??
                          r['status-value:success'][0] ??
                          t?.id,
                      })
                    },
                  },
                  n.createElement(k, { status: we, 'aria-label': Y, isRunning: h }),
                  r['status-value:error'].length + r['status-value:warning'].length || null
                )
              )
            ),
            !t &&
              n.createElement(
                $,
                null,
                n.createElement(x, {
                  as: 'label',
                  title: a ? n.createElement(_t, null, 'Coverage (unavailable)') : 'Coverage',
                  icon: n.createElement(B.Checkbox, {
                    checked: g.coverage,
                    disabled: h,
                    onChange: () =>
                      u((_) => ({ ..._, config: { ..._.config, coverage: !g.coverage } })),
                  }),
                }),
                n.createElement(
                  b,
                  {
                    hasChrome: !1,
                    trigger: 'hover',
                    tooltip: n.createElement(y, {
                      note: a
                        ? 'Unavailable in watch mode'
                        : m.triggeredBy && !ue.includes(m.triggeredBy)
                          ? 'Unavailable when running focused tests'
                          : h
                            ? 'Testing in progress'
                            : m.coverageSummary
                              ? 'View coverage report'
                              : p
                                ? 'Component tests crashed'
                                : 'Run tests to calculate coverage',
                    }),
                  },
                  a || (m.triggeredBy && !ue.includes(m.triggeredBy))
                    ? n.createElement(
                        f,
                        { size: 'medium', disabled: !0 },
                        n.createElement(le, {
                          'aria-label': a
                            ? 'Coverage is unavailable in watch mode'
                            : 'Coverage is unavailable when running focused tests',
                        })
                      )
                    : m.coverageSummary
                      ? n.createElement(
                          f,
                          { asChild: !0, size: 'medium' },
                          n.createElement(
                            'a',
                            {
                              href: '/coverage/index.html',
                              target: '_blank',
                              'aria-label': 'Open coverage report',
                            },
                            n.createElement(k, {
                              isRunning: h,
                              percentage: m.coverageSummary.percentage,
                              status: m.coverageSummary.status,
                              'aria-label': `Coverage status: ${m.coverageSummary.status}`,
                            }),
                            n.createElement(
                              'span',
                              { 'aria-label': `${m.coverageSummary.percentage} percent coverage` },
                              m.coverageSummary.percentage,
                              '%'
                            )
                          )
                        )
                      : n.createElement(
                          f,
                          { size: 'medium', disabled: !0 },
                          n.createElement(k, {
                            isRunning: h,
                            status: p ? 'critical' : 'unknown',
                            'aria-label': 'Coverage status: unknown',
                          })
                        )
                )
              ),
            L &&
              n.createElement(
                $,
                null,
                n.createElement(x, {
                  as: 'label',
                  title: 'Accessibility',
                  icon: t
                    ? null
                    : n.createElement(B.Checkbox, {
                        checked: g.a11y,
                        disabled: h,
                        onChange: () =>
                          u((_) => ({ ..._, config: { ..._.config, a11y: !g.a11y } })),
                      }),
                }),
                n.createElement(
                  b,
                  { hasChrome: !1, trigger: 'hover', tooltip: n.createElement(y, { note: K }) },
                  n.createElement(
                    f,
                    {
                      size: 'medium',
                      disabled:
                        l['status-value:error'].length === 0 &&
                        l['status-value:warning'].length === 0 &&
                        l['status-value:success'].length === 0,
                      onClick: () => {
                        fe({
                          api: e,
                          entryId:
                            l['status-value:error'][0] ??
                            l['status-value:warning'][0] ??
                            l['status-value:success'][0] ??
                            t?.id,
                          panelId: Se,
                        })
                      },
                    },
                    n.createElement(k, { status: Oe, 'aria-label': K, isRunning: h }),
                    l['status-value:error'].length + l['status-value:warning'].length || null
                  )
                )
              )
          )
        )
      },
      Ot = ({ context: e, api: t }) => {
        let {
          testProviderState: o,
          componentTestStatusValueToStoryIds: c,
          a11yStatusValueToStoryIds: u,
          storeState: r,
          setStoreState: l,
        } = Ce(t, e.id)
        return n.createElement(_e, {
          api: t,
          entry: e,
          style: { minWidth: 240 },
          testProviderState: o,
          componentTestStatusValueToStoryIds: c,
          a11yStatusValueToStoryIds: u,
          storeState: r,
          setStoreState: l,
          isSettingsUpdated: !1,
        })
      }
    P.register(O, (e) => {
      if ((globalThis.STORYBOOK_BUILDER || '').includes('vite')) {
        let t = (o) => {
          ;(e.setSelectedPanel(o), e.togglePanel(!0))
        }
        ;(Le.onSelect(() => {
          t(Ee)
        }),
          Ue.onSelect(() => {
            t(Se)
          }),
          be.onRunAll(() => {
            E.send({ type: 'TRIGGER_RUN', payload: { triggeredBy: 'run-all' } })
          }),
          E.untilReady().then(() => {
            E.setState((o) => ({
              ...o,
              indexUrl: new URL('index.json', window.location.href).toString(),
            }))
          }),
          P.add(Pe, {
            type: Z.experimental_TEST_PROVIDER,
            render: () => {
              let [o, c] = R(!1),
                {
                  storeState: u,
                  setStoreState: r,
                  testProviderState: l,
                  componentTestStatusValueToStoryIds: i,
                  a11yStatusValueToStoryIds: s,
                  isSettingsUpdated: g,
                } = Ce(e)
              return n.createElement(
                W.Provider,
                { value: { isModalOpen: o, setModalOpen: c } },
                n.createElement(_e, {
                  api: e,
                  storeState: u,
                  setStoreState: r,
                  isSettingsUpdated: g,
                  testProviderState: l,
                  componentTestStatusValueToStoryIds: i,
                  a11yStatusValueToStoryIds: s,
                }),
                n.createElement(He, {
                  storeState: u,
                  onRerun: () => {
                    ;(c(!1), E.send({ type: 'TRIGGER_RUN', payload: { triggeredBy: 'global' } }))
                  },
                })
              )
            },
            sidebarContextMenu: ({ context: o }) =>
              o.type === 'docs' || (o.type === 'story' && !o.tags.includes('test'))
                ? null
                : n.createElement(Ot, { context: o, api: e }),
          }))
      }
    })
  })()
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e)
}
