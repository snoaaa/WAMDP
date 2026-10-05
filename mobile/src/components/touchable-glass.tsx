import React, { useState } from "react";
import { TouchableWithoutFeedback, type ViewProps } from "react-native";
import Animated from "react-native-reanimated";
import { BlurViewRawBackdrop } from "./blur-raw";
import { AppleGlassView } from "./tw";

type GlassViewProps = React.ComponentProps<typeof AppleGlassView>;

type TouchableGlassProps = GlassViewProps & {
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  disabled?: boolean;
};

type ViewOnlyProps = ViewProps & { className?: string };

export function TouchableGlass({
  onPress,
  onPressIn,
  onPressOut,
  ref,
  disabled,
  children,
  style,
  className,
  ...rest
}: TouchableGlassProps) {
  const { fallbackTint, fallbackIntensity, glassEffectStyle, tintColor, isInteractive, colorScheme, animatedProps, ...viewProps } = rest as Record<string, unknown>;
  const safeViewProps = viewProps as ViewOnlyProps;
  const [pressed, setPressed] = useState(false);
  const onTouchBegin = () => {
    setPressed(true);
    onPressIn?.();
  };
  const onTouchEnd = () => {
    setPressed(false);
    onPressOut?.();
  };
  const onTouchEndSuccess = () => {
    setPressed(false);
    onPress?.();
    onPressOut?.();
  };

  return (
    <TouchableWithoutFeedback
      className="contents"
      onPress={onTouchEndSuccess}
      onPressIn={onTouchBegin}
      onPressOut={onTouchEnd}
      disabled={disabled}
    >
      <Animated.View
        ref={ref as any}
        className={className}
        {...safeViewProps}
        style={[
          {
            overflow: "hidden",
            transitionDuration: "150ms",
            transitionProperty: ["transform", "opacity"],
            transitionTimingFunction: "ease-in-out",
          },
          pressed && { transform: [{ scale: 1.1 }] },
          disabled && { opacity: 0.5 },
          style as any,
        ]}
      >
        <BlurViewRawBackdrop />
        {children as React.ReactNode}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
