import { BlurView as EXBlurView } from "expo-blur";
import { Image as XImage } from "expo-image";
import { StyleSheet, type ViewStyle } from "react-native";
import { withUniwind } from "uniwind";

import { SafeAreaView as XSafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

export const SafeAreaView = withUniwind(XSafeAreaView);
export const Image = withUniwind(XImage);
export const KeyboardGestureArea = withUniwind(View);

const BlurView = withUniwind(EXBlurView);

export const AppleGlassView = ({
  fallbackTint,
  fallbackIntensity,
  children,
  style,
  className,
  ...rest
}: any) => {
  return (
    <BlurView
      className={className}
      style={[{ overflow: "hidden" }, StyleSheet.flatten(style) as ViewStyle]}
      tint={fallbackTint || "default"}
      intensity={fallbackIntensity || 50}
    >
      {children}
    </BlurView>
  );
};

export const GlassView = BlurView;
