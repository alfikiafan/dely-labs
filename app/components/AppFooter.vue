<script setup>
const localePath = useLocalePath();

const products = [
	{ name: "Dely Kit", href: "https://kit.delylabs.com" },
	{ name: "Dely Compare", href: "https://compare.delylabs.com" },
	{ name: "Dely Terbilang", href: "https://terbilang.delylabs.com" },
	{ name: "Dely Sign", href: "https://sign.delylabs.com" },
];

const socials = [
	{ name: "GitHub", icon: "lucide:github", href: "#" },
	{ name: "Twitter", icon: "lucide:twitter", href: "#" },
	{ name: "LinkedIn", icon: "lucide:linkedin", href: "#" },
];
</script>

<template>
	<footer
		class="bg-[#010409] border-t border-white/5 font-sans"
		aria-labelledby="footer-heading"
	>
		<h2 id="footer-heading" class="sr-only">Footer</h2>

		<div class="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
			<div class="lg:grid lg:grid-cols-3 lg:gap-8">
				<div class="space-y-6">
					<div class="flex items-center gap-3">
						<img
							class="h-10 w-auto"
							src="/dely-labs-inverted.webp"
							alt="Dely Labs"
						/>
						<span class="text-white font-bold text-2xl tracking-tight"
							>Dely Labs</span
						>
					</div>
					<p class="text-base leading-relaxed text-gray-400 max-w-sm">
						{{ $t("footer.tagline") }}
					</p>
					<div class="flex space-x-5">
						<a
							v-for="item in socials"
							:key="item.name"
							:href="item.href"
							class="text-gray-400 hover:text-white transition-colors"
						>
							<span class="sr-only">{{ item.name }}</span>
							<Icon :name="item.icon" size="24" />
						</a>
					</div>
				</div>

				<div class="mt-10 grid grid-cols-2 gap-8 lg:col-span-2 lg:mt-0">
					<div>
						<h3 class="font-bold leading-6 text-white uppercase tracking-wider">
							{{ $t("footer.products") }}
						</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li v-for="item in products" :key="item.name">
								<a
									:href="item.href"
									class="text-base leading-6 text-gray-400 hover:text-primary-400 transition-colors"
								>
									{{ item.name }}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 class="font-bold leading-6 text-white uppercase tracking-wider">
							{{ $t("footer.legal") }}
						</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<NuxtLink
									:to="localePath('/privacy')"
									class="text-base leading-6 text-gray-400 hover:text-primary-400 transition-colors"
								>
									{{ $t("footer.privacy") }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink
									:to="localePath('/terms')"
									class="text-base leading-6 text-gray-400 hover:text-primary-400 transition-colors"
								>
									{{ $t("footer.terms") }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div
				class="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
			>
				<p class="text-sm text-gray-300">{{ $t("footer.copyright") }}</p>
				<p class="text-sm text-gray-400 flex items-center gap-2">
					Designed with
					<Icon name="lucide:heart" class="text-red-300" size="14" /> by Dely
					Labs
				</p>
			</div>
		</div>
	</footer>
</template>
