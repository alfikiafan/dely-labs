<script setup>
definePageMeta({
	layout: "default",
});

const auroraStyle = {
	clipPath:
		"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
};

const products = [
	{
		key: "kit",
		href: "https://kit.delylabs.com",
		icon: "/dely-kit.webp",
		color: "#0EA5E9",
	},
	{
		key: "compare",
		href: "https://compare.delylabs.com",
		icon: "/dely-compare.webp",
		color: "#6366F1",
	},
	{
		key: "terbilang",
		href: "https://terbilang.delylabs.com",
		icon: "/dely-terbilang.webp",
		color: "#10B981",
	},
	{
		key: "sign",
		href: "https://sign.delylabs.com",
		icon: "/dely-sign.webp",
		color: "#0D9488",
	},
];
</script>

<template>
	<div class="relative isolate px-6 lg:px-8">
		<section
			class="relative flex min-h-screen flex-col justify-center items-center px-6 lg:px-8"
		>
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-600 to-void-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					:style="auroraStyle"
				/>
			</div>

			<div class="mx-auto max-w-3xl text-center">
				<div
					class="hidden sm:mb-8 sm:flex sm:justify-center"
					v-motion-fade-visible-once
				>
					<div
						class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 hover:text-white transition-all cursor-default"
					>
						{{ $t("hero.badge") }}
					</div>
				</div>

				<h1
					class="text-4xl font-bold tracking-tight text-white sm:text-7xl mb-6"
					v-motion
					:initial="{ opacity: 0, y: 50 }"
					:enter="{
						opacity: 1,
						y: 0,
						transition: { duration: 800, ease: 'easeOut' },
					}"
				>
					<span class="block text-gray-300">{{ $t("hero.title_start") }}</span>
					<span
						class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400 animate-pulse-slow"
					>
						{{ $t("hero.title_highlight") }}
					</span>
				</h1>

				<p
					class="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto"
					v-motion
					:initial="{ opacity: 0 }"
					:enter="{ opacity: 1, transition: { duration: 1000, delay: 300 } }"
				>
					{{ $t("hero.subtitle") }}
				</p>

				<div
					class="mt-10 flex items-center justify-center gap-x-6"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:enter="{
						opacity: 1,
						y: 0,
						transition: { duration: 800, delay: 500 },
					}"
				>
					<a
						href="#products"
						class="rounded-full bg-primary-600 px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-primary-500 hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300"
					>
						{{ $t("hero.cta_primary") }}
					</a>
					<a
						href="#about"
						class="font-semibold leading-6 text-white hover:text-primary-400 transition-colors"
					>
						{{ $t("hero.cta_secondary") }} <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>

			<div class="absolute bottom-10 animate-bounce text-gray-500">
				<Icon name="heroicons:chevron-down" size="24" />
			</div>
		</section>
		<div
			id="products"
			class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 border-t border-white/5 bg-void-900 relative"
		>
			<div class="mx-auto max-w-2xl text-center mb-16">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					{{ $t("products.section_title") }}
				</h2>
				<p class="mt-4 text-lg leading-8 text-gray-400">
					{{ $t("products.section_subtitle") }}
				</p>
			</div>

			<div
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
			>
				<SpotlightCard
					v-for="prod in products"
					:key="prod.key"
					:title="$t(`products.${prod.key}.title`)"
					:description="$t(`products.${prod.key}.desc`)"
					:action="$t(`products.${prod.key}.action`)"
					:href="prod.href"
					:icon="prod.icon"
					:color="prod.color"
					v-motion-slide-visible-once-bottom
				/>
			</div>

			<div
				class="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					:style="auroraStyle"
				/>
			</div>
		</div>
	</div>
	<section
		id="about"
		class="relative py-24 sm:py-32 bg-void-900 border-t border-white/5"
	>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center mb-16">
				<h2 class="text-base font-semibold leading-7 text-primary-400">
					{{ $t("manifesto.badge") }}
				</h2>
				<p
					class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
				>
					{{ $t("manifesto.title") }}
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-400">
					{{ $t("manifesto.subtitle") }}
				</p>
			</div>

			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
					<div
						class="col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl bg-white/5 p-8 border border-white/10 hover:border-primary-500/30 transition-all group"
					>
						<div
							class="absolute -right-10 -top-10 text-white/5 group-hover:text-primary-500/10 transition-colors"
						>
							<Icon name="lucide:shield-check" size="200" />
						</div>
						<div class="relative z-10">
							<div
								class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400"
							>
								<Icon name="lucide:lock" size="20" />
							</div>
							<h3 class="text-xl font-bold text-white">
								{{ $t("manifesto.privacy.title") }}
							</h3>
							<p class="mt-2 text-gray-400 leading-relaxed max-w-md">
								{{ $t("manifesto.privacy.desc") }}
							</p>
						</div>
					</div>

					<div
						class="col-span-1 relative overflow-hidden rounded-3xl bg-white/5 p-8 border border-white/10 hover:border-sky-500/30 transition-all group"
					>
						<div
							class="absolute -right-6 -bottom-6 text-white/5 group-hover:text-sky-500/10 transition-colors"
						>
							<Icon name="lucide:zap" size="140" />
						</div>
						<div class="relative z-10">
							<div
								class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400"
							>
								<Icon name="lucide:zap" size="20" />
							</div>
							<h3 class="text-xl font-bold text-white">
								{{ $t("manifesto.speed.title") }}
							</h3>
							<p class="mt-2 text-gray-400 leading-relaxed">
								{{ $t("manifesto.speed.desc") }}
							</p>
						</div>
					</div>

					<div
						class="col-span-1 relative overflow-hidden rounded-3xl bg-white/5 p-8 border border-white/10 hover:border-indigo-500/30 transition-all group"
					>
						<div
							class="absolute right-4 top-4 text-white/5 group-hover:text-indigo-500/10 transition-colors"
						>
							<Icon name="lucide:layout" size="120" />
						</div>
						<div class="relative z-10">
							<div
								class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400"
							>
								<Icon name="lucide:sparkles" size="20" />
							</div>
							<h3 class="text-xl font-bold text-white">
								{{ $t("manifesto.simplicity.title") }}
							</h3>
							<p class="mt-2 text-gray-400 leading-relaxed">
								{{ $t("manifesto.simplicity.desc") }}
							</p>
						</div>
					</div>

					<div
						class="col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl bg-white/5 p-8 border border-white/10 hover:border-emerald-500/30 transition-all group"
					>
						<div
							class="absolute -left-10 -bottom-10 text-white/5 group-hover:text-emerald-500/10 transition-colors"
						>
							<Icon name="lucide:code-2" size="200" />
						</div>
						<div
							class="relative z-10 text-right md:text-left flex flex-col md:items-end"
						>
							<div
								class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400"
							>
								<Icon name="lucide:github" size="20" />
							</div>
							<h3 class="text-xl font-bold text-white">
								{{ $t("manifesto.open.title") }}
							</h3>
							<p class="mt-2 text-gray-400 leading-relaxed max-w-md">
								{{ $t("manifesto.open.desc") }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
