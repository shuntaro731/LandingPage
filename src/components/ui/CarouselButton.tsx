import type { FunctionalComponent } from "preact";
import { IconChevronRight } from "@tabler/icons-preact";
import { IconChevronLeft } from "@tabler/icons-preact";

interface Props {
  direction: "prev" | "next";
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean; // disabled状態をPropsとして受け取る
}

const CarouselButton: FunctionalComponent<Props> = ({
  direction,
  onClick,
  disabled,
}: Props) => {
  const icon =
    direction === "prev" ? <IconChevronLeft /> : <IconChevronRight />;
  // アクセシビリティのためのラベルの決定
  const label = direction === "prev" ? "前のコンテンツへ" : "次のコンテンツへ";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors hover:bg-gray-300 disabled:pointer-events-none disabled:opacity-60"
    >
      {icon}
    </button>
  );
};

export default CarouselButton;
