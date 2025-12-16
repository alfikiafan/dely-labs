<script setup>
const { locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();

const switchLang = (code) => {
	setLocale(code);
};
</script>

<template>
	<header
		class="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-void-900/70 backdrop-blur-xl transition-all"
	>
		<nav
			class="flex items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<NuxtLink
					:to="localePath('/')"
					class="-m-1.5 p-1.5 flex items-center gap-3 group"
				>
					<img
						class="h-8 w-auto transition-transform group-hover:scale-110 duration-300"
						src="/dely-labs-inverted.webp"
						alt="Dely Labs"
					/>
					<span
						class="text-white font-bold text-lg tracking-tight group-hover:text-primary-400 transition-colors"
						>Dely Labs</span
					>
				</NuxtLink>
			</div>

			<div class="hidden lg:flex lg:gap-x-8">
				<a
					href="/#products"
					class="font-semibold leading-6 text-white hover:text-primary-400 transition-colors"
				>
					{{ $t("nav.products") }}
				</a>
				<a
					href="/#manifesto"
					class="font-semibold leading-6 text-white hover:text-primary-400 transition-colors"
				>
					{{ $t("nav.manifesto") }}
				</a>
				<NuxtLink
					:to="localePath('/about')"
					class="font-semibold leading-6 text-white hover:text-primary-400 transition-colors"
				>
					{{ $t("nav.about") }}
				</NuxtLink>
				<NuxtLink
					:to="localePath('/contact')"
					class="font-semibold leading-6 text-white hover:text-primary-400 transition-colors"
				>
					{{ $t("nav.contact") }}
				</NuxtLink>
			</div>

			<div class="flex flex-1 justify-end items-center gap-4">
				<div
					class="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white"
				>
					<button
						v-for="lang in locales"
						:key="lang.code"
						@click="switchLang(lang.code)"
						class="transition-colors uppercase"
						:class="
							locale === lang.code
								? 'text-primary-400'
								: 'text-gray-500 hover:text-white'
						"
					>
						{{ lang.code }}
					</button>
				</div>
			</div>
		</nav>
	</header>
</template>
