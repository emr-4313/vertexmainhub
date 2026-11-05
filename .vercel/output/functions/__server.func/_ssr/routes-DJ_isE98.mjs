import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Copy, n as Search, r as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJ_isE98.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLACES = [
	{
		id: "realistic",
		name: "Realistic ACS",
		file: "Realistic_Acs.rbxl",
		downloadName: "Realistic_Acs.rbxl",
		bytes: 31343808,
		ext: "rbxl",
		kind: "Yer",
		note: "Studio'da Dosya → Dosyadan aç."
	},
	{
		id: "som",
		name: "som ACS test",
		file: "somACStest.rbxl",
		downloadName: "somACStest.rbxl",
		bytes: 14902584,
		ext: "rbxl",
		kind: "Yer",
		note: "Test yeri. Studio'da Dosya → Dosyadan aç."
	},
	{
		id: "nuycs",
		name: "nuycs ACS v2",
		file: "nuycs_acs_v2.rbxm",
		downloadName: "nuycs_acs_v2.rbxm",
		bytes: 12731872,
		ext: "rbxm",
		kind: "Model",
		note: "Model. Studio Explorer'a sürükle."
	},
	{
		id: "va",
		name: "V.A. ACS",
		file: "VA_ACS_Roblox_Studios.rbxl",
		downloadName: "VA_ACS_Roblox_Studios.rbxl",
		bytes: 8719022,
		ext: "rbxl",
		kind: "Yer",
		note: "Studio'da Dosya → Dosyadan aç."
	},
	{
		id: "ots",
		name: "OTS ACS",
		file: "OTS_ACS.rbxl",
		downloadName: "OTS_ACS.rbxl",
		bytes: 3973813,
		ext: "rbxl",
		kind: "Yer",
		note: "Omuz üstü ACS yeri. Dosyadan aç."
	},
	{
		id: "aether",
		name: "Shattered Aether Map",
		file: "Shattered_Aether_Map.rbxl",
		downloadName: "Shattered_Aether_Map.rbxl",
		bytes: 954581,
		ext: "rbxl",
		kind: "Harita",
		note: "Harita yeri. Studio'da Dosya → Dosyadan aç."
	}
];
function formatBytes(bytes) {
	if (bytes < 1048576) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
	const mb = bytes / 1048576;
	return `${mb >= 10 ? mb.toFixed(1) : mb.toFixed(2)} MB`;
}
var ARCHIVE_BYTES = PLACES.reduce((sum, file) => sum + file.bytes, 0);
var FILTERS = [
	{
		id: "all",
		label: "Tümü"
	},
	{
		id: "rbxl",
		label: "Yer .rbxl"
	},
	{
		id: "rbxm",
		label: "Model .rbxm"
	}
];
function Home() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [copiedId, setCopiedId] = (0, import_react.useState)(null);
	const files = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return PLACES.filter((file) => {
			if (filter !== "all" && file.ext !== filter) return false;
			if (!q) return true;
			return file.name.toLowerCase().includes(q) || file.kind.toLowerCase().includes(q) || file.ext.includes(q);
		});
	}, [query, filter]);
	async function copyLink(id, href) {
		const absolute = new URL(href, window.location.href).toString();
		try {
			await navigator.clipboard.writeText(absolute);
		} catch {
			const input = document.createElement("input");
			input.value = absolute;
			document.body.appendChild(input);
			input.select();
			document.execCommand("copy");
			input.remove();
		}
		setCopiedId(id);
		window.setTimeout(() => {
			setCopiedId((current) => current === id ? null : current);
		}, 1600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen w-full bg-background font-sans text-foreground selection:bg-primary/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "vertex-grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-border/50 bg-background/80 px-6 py-4 backdrop-blur-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#dosyalar",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/vertex-logo.png",
							alt: "",
							className: "size-8 object-contain mix-blend-screen"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-bold tracking-tight",
							children: "Vertex Hub"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-8 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#dosyalar",
							className: "text-sm font-medium text-muted transition-colors hover:text-foreground",
							children: "Dosyalar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#acilis",
							className: "text-sm font-medium text-muted transition-colors hover:text-foreground",
							children: "Nasıl açılır"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#dosyalar",
						className: "rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-on-primary",
						children: "İndir"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 pb-24 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-16 flex max-w-3xl flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/vertex-logo.png",
								alt: "",
								className: "mb-8 size-32 object-contain mix-blend-screen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mb-6 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl",
								children: "Vertex Hub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 max-w-2xl text-lg text-muted sm:text-xl",
								children: "Uygulama değil. Roblox yer ve model dosyaları. İndir, Studio'da aç."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-10 font-mono text-sm text-foreground",
								children: [
									PLACES.length,
									" dosya · ",
									formatBytes(ARCHIVE_BYTES)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#dosyalar",
								className: "inline-flex h-12 items-center rounded-lg bg-primary px-8 text-lg font-semibold text-on-primary",
								children: "Dosyalara git"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "dosyalar",
						className: "mb-20 w-full max-w-5xl scroll-mt-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mb-2 text-3xl font-bold tracking-tight sm:text-4xl",
									children: "Dosyalar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: "Verdiğin .rbxl ve .rbxm dosyaları."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto mb-4 flex max-w-xl items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										className: "size-4 shrink-0 text-muted",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sr-only",
										htmlFor: "file-search",
										children: "Dosya ara"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "file-search",
										value: query,
										onChange: (event) => setQuery(event.target.value),
										placeholder: "Ada göre ara",
										suppressHydrationWarning: true,
										className: "h-12 w-full bg-transparent text-foreground outline-none placeholder:text-muted"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 flex flex-wrap justify-center gap-2",
								role: "group",
								"aria-label": "Dosya türü",
								children: FILTERS.map((item) => {
									const active = filter === item.id;
									const count = item.id === "all" ? PLACES.length : PLACES.filter((file) => file.ext === item.id).length;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-pressed": active,
										onClick: () => setFilter(item.id),
										className: active ? "h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-on-primary" : "h-11 rounded-lg border border-border/50 bg-card/50 px-4 text-sm font-medium text-foreground",
										children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 font-mono",
											children: count
										})]
									}, item.id);
								})
							}),
							files.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-xl border border-border/50 bg-card/50 px-4 py-10 text-center text-muted",
								children: "Bu aramaya uyan dosya yok."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid grid-cols-1 gap-6 md:grid-cols-2",
								children: files.map((file) => {
									const href = `/files/${file.file}`;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex flex-col gap-4 rounded-xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-border hover:bg-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "truncate text-lg font-semibold",
														children: file.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-1 font-mono text-sm text-muted",
														children: [
															".",
															file.ext,
															" · ",
															file.kind,
															" · ",
															formatBytes(file.bytes)
														]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-lg border border-border/50 bg-background px-2 py-1 font-mono text-xs text-accent",
													children: file.ext.toUpperCase()
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-relaxed text-muted",
												children: file.note
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-auto flex flex-wrap gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href,
													download: file.downloadName,
													className: "inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-on-primary",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
														className: "size-4",
														"aria-hidden": "true"
													}), "İndir"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => copyLink(file.id, href),
													className: "inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-transparent px-4 text-sm font-semibold text-foreground hover:bg-card",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
														className: "size-4",
														"aria-hidden": "true"
													}), copiedId === file.id ? "Kopyalandı" : "Bağlantı"]
												})]
											})
										]
									}, file.id);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "acilis",
						className: "w-full max-w-5xl scroll-mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-2 text-3xl font-bold tracking-tight sm:text-4xl",
								children: "Nasıl açılır"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: "Studio'da iki farklı dosya türü."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl border border-border/50 bg-card/50 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-accent",
										children: ".RBXL"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-lg font-semibold",
										children: "Yer dosyası"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: "Roblox Studio → Dosya → Dosyadan aç. Harita ve ACS yerleri bu şekilde açılır."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl border border-border/50 bg-card/50 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-accent",
										children: ".RBXM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-lg font-semibold",
										children: "Model"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: "Bir yer açıkken dosyayı Explorer paneline sürükle. nuycs ACS v2 bir modeldir."
									})
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 border-t border-border/50 py-12 text-center text-sm text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Vertex Hub. Yer dosyaları."
				] })
			})
		]
	});
}
//#endregion
export { Home as component };
