/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {ImageSource} from '../../Image/ImageSource';
import type {HostComponent} from '../../Renderer/shims/ReactNativeTypes';
import type {ColorValue} from '../../StyleSheet/StyleSheet';
import type {Float, WithDefault} from '../../Types/CodegenTypes';
import type {ViewProps} from '../View/ViewPropTypes';

import codegenNativeComponent from '../../Utilities/codegenNativeComponent';

type NativeProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  progressViewStyle?: WithDefault<'default' | 'bar', 'default'>,
  progress?: WithDefault<Float, 0>,
  progressTintColor?: ?ColorValue,
  trackTintColor?: ?ColorValue,
  progressImage?: ?ImageSource,
  trackImage?: ?ImageSource,
|}>;

export default (codegenNativeComponent<NativeProps>(
  'RCTProgressView',
): HostComponent<NativeProps>);
