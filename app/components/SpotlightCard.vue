<script setup>
import { useMouseInElement } from "@vueuse/core";

const props = defineProps({
	title: String,
	description: String,
	action: String,
	href: String,
	icon: String,
	color: { type: String, default: "#D946EF" }, // Default Fuchsia
});

const target = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(target);

// Mengubah Hex ke RGB string agar bisa diatur opacity-nya di CSS
const hexToRgb = (hex) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
				result[3],
				16
		  )}`
		: "255, 255, 255";
};

const colorRgb = computed(() => hexToRgb(props.color));
</script>

<template>
	<a
		ref="target"
		:href="href"
		class="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
	>
		<div
			class="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
			:style="{
				background: `radial-gradient(600px circle at ${elementX}px ${elementY}px, rgba(${colorRgb}, 0.15), transparent 40%)`,
			}"
		/>

		<div
			class="pointer-events-none absolute inset-0 rounded-2xl transition duration-300 opacity-0 group-hover:opacity-100 border border-transparent"
			:style="{
				borderColor: props.color,
				maskImage: `radial-gradient(200px circle at ${elementX}px ${elementY}px, black, transparent)`,
				WebkitMaskImage: `radial-gradient(200px circle at ${elementX}px ${elementY}px, black, transparent)`,
			}"
		></div>

		<div class="relative z-10 w-full">
			<div class="mb-4 shadow-inner" :style="{ color: props.color }">
				<img
					:src="icon"
					:alt="title"
					class="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
				/>
			</div>

			<h3 class="text-xl font-bold text-white mb-2">
				{{ title }}
			</h3>

			<p class="text-gray-400 leading-relaxed mb-6 min-h-[40px]">
				{{ description }}
			</p>

			<div
				class="flex items-center gap-2 font-semibold transition-colors"
				:style="{ color: props.color }"
			>
				{{ action }}
				<Icon
					name="heroicons:arrow-right"
					size="16"
					class="transition-transform group-hover:translate-x-1"
				/>
			</div>
		</div>
	</a>
</template>
