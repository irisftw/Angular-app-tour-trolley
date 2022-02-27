import { ProdLabel } from './prodLabel';

export interface Trolley {
  trolleyId: number;
  trolleyName: string;
  cpackinglist: string;
  ctext: string;
  nbatchSeqSize: number;
  nbatchSeq: number;
  nlabelMax: number;
  prodLabels: ProdLabel[];
}
