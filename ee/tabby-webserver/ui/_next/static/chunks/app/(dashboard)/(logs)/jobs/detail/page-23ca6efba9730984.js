(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1908],{50613:function(n,e,t){Promise.resolve().then(t.bind(t,77930))},77930:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var s=t(36164),r=t(3546),a=t(11978),i=t(70787),o=t(97651),l=t.n(o),d=t(99092),u=t.n(d),c=t(40055),f=t(70410),g=t(74248),m=t(81565),x=t(50538),$=t(90379),b=t(17484);function h(){var n,e,t;let i=(0,a.useRouter)(),o=(0,a.useSearchParams)(),d=o.get("id"),[{data:g,error:h,fetching:j},p]=(0,c.aM)({query:f.GG,variables:{ids:[d]},pause:!d}),N=null==g?void 0:null===(t=g.jobRuns)||void 0===t?void 0:null===(e=t.edges)||void 0===e?void 0:null===(n=e[0])||void 0===n?void 0:n.node;return r.useEffect(()=>{let n;return(null==N?void 0:N.createdAt)&&!(null==N?void 0:N.finishedAt)&&(n=window.setTimeout(()=>{p()},5e3)),()=>{n&&clearInterval(n)}},[N]),(0,s.jsx)(s.Fragment,{children:j?(0,s.jsx)($.cg,{}):(0,s.jsx)("div",{className:"flex flex-1 flex-col items-stretch gap-2",children:N&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{onClick:()=>i.back(),className:"-ml-1 flex cursor-pointer items-center transition-opacity hover:opacity-60",children:[(0,s.jsx)(m.IconChevronLeft,{className:"mr-1 h-6 w-6"}),(0,s.jsx)("h2",{className:"scroll-m-20 text-3xl font-bold tracking-tight first:mt-0",children:(0,b.Y)(N.job)})]}),(0,s.jsxs)("div",{className:"mb-8 flex gap-x-5 text-sm text-muted-foreground lg:gap-x-10",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)(m.IconStopWatch,{}),(0,s.jsxs)("p",{children:["State: ",(0,b.$)(N.exitCode)]})]}),N.createdAt&&(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)(m.IconClock,{}),(0,s.jsxs)("p",{children:["Started:"," ",u()(N.createdAt).format("YYYY-MM-DD HH:mm")]})]}),N.createdAt&&N.finishedAt&&(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)(m.IconHistory,{}),(0,s.jsxs)("p",{children:["Duration:"," ",l()(u().duration(u()(N.finishedAt).diff(N.createdAt)).asMilliseconds())]})]})]}),(0,s.jsxs)(x.mQ,{defaultValue:"stdout",className:"flex flex-1 flex-col",children:[(0,s.jsxs)(x.dr,{className:"grid w-[400px] grid-cols-2",children:[(0,s.jsxs)(x.SP,{value:"stdout",children:[(0,s.jsx)(m.IconTerminalSquare,{className:"mr-1"}),"stdout"]}),(0,s.jsxs)(x.SP,{value:"stderr",children:[(0,s.jsx)(m.IconAlertTriangle,{className:"mr-1"}),"stderr"]})]}),(0,s.jsxs)("div",{className:"flex flex-1 flex-col",children:[(0,s.jsx)(x.nU,{value:"stdout",children:(0,s.jsx)(v,{value:null==N?void 0:N.stdout})}),(0,s.jsx)(x.nU,{value:"stderr",children:(0,s.jsx)(v,{value:null==N?void 0:N.stderr})})]})]})]})})})}function v(n){let{children:e,className:t,value:r,...a}=n;return(0,s.jsx)("div",{className:(0,g.cn)("mt-2 h-[66vh] w-full overflow-y-auto overflow-x-hidden rounded-lg border bg-gray-50 font-mono text-[0.9rem] dark:bg-gray-800",t),...a,children:r?(0,s.jsx)("pre",{className:"whitespace-pre-wrap p-4",children:(0,s.jsx)(i.Z,{children:r})}):(0,s.jsx)("div",{className:"p-4",children:"No Data"})})}},17484:function(n,e,t){"use strict";t.d(e,{$:function(){return i},Y:function(){return a}});var s=t(74630);let r={scheduler_git:"Git",scheduler_github_gitlab:"Github / Gitlab",web:"Web"};function a(n){return n in r?r[n]:n}function i(n){return(0,s.Z)(n)?"Pending":0===n?"Success":"Failed"}},90379:function(n,e,t){"use strict";t.d(e,{PF:function(){return l},cg:function(){return i},tB:function(){return o}});var s=t(36164),r=t(74248),a=t(3448);let i=n=>{let{className:e,...t}=n;return(0,s.jsxs)("div",{className:(0,r.cn)("space-y-3",e),...t,children:[(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-full"})]})},o=n=>{let{className:e,...t}=n;return(0,s.jsx)(a.O,{className:(0,r.cn)("h-4 w-full",e),...t})},l=n=>{let{className:e,...t}=n;return(0,s.jsxs)("div",{className:(0,r.cn)("flex flex-col gap-3",e),...t,children:[(0,s.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(a.O,{className:"h-4 w-full"})]})}},3448:function(n,e,t){"use strict";t.d(e,{O:function(){return a}});var s=t(36164),r=t(74248);function a(n){let{className:e,...t}=n;return(0,s.jsx)("div",{className:(0,r.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",e),...t})}},50538:function(n,e,t){"use strict";t.d(e,{SP:function(){return d},dr:function(){return l},mQ:function(){return o},nU:function(){return u}});var s=t(36164),r=t(3546),a=t(6044),i=t(74248);let o=a.fC,l=r.forwardRef((n,e)=>{let{className:t,...r}=n;return(0,s.jsx)(a.aV,{ref:e,className:(0,i.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...r})});l.displayName=a.aV.displayName;let d=r.forwardRef((n,e)=>{let{className:t,...r}=n;return(0,s.jsx)(a.xz,{ref:e,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...r})});d.displayName=a.xz.displayName;let u=r.forwardRef((n,e)=>{let{className:t,...r}=n;return(0,s.jsx)(a.VY,{ref:e,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...r})});u.displayName=a.VY.displayName},70410:function(n,e,t){"use strict";t.d(e,{Cl:function(){return c},DQ:function(){return l},GG:function(){return i},S1:function(){return a},XP:function(){return m},Y6:function(){return u},kb:function(){return f},lE:function(){return r},ts:function(){return g},yB:function(){return o},yw:function(){return d}});var s=t(43240);let r=(0,s.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,s.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),i=(0,s.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,s.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),l=(0,s.BX)("\n  query ListJobs {\n    jobs\n  }\n"),d=(0,s.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),u=(0,s.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),c=(0,s.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),f=(0,s.BX)("\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),g=(0,s.BX)("\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),m=(0,s.BX)("\n  query WebCrawlerUrls(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    webCrawlerUrls(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          url\n          id\n          createdAt\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")}},function(n){n.O(0,[7565,7998,5498,5384,2785,6044,134,9736,1565,3375,5289,1744],function(){return n(n.s=50613)}),_N_E=n.O()}]);