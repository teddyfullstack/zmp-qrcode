import { Options } from 'qr-code-styling/lib/types'
export interface QRCodeProps extends Options {
  value: string;
  rounded: boolean;
  image: string;
  size: 'auto' | number;
}