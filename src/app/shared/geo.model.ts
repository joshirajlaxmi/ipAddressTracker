import { Asn } from './asn.model';
import { Locationinfo } from './locationinfo.model';

export interface Geo {
  ip: string;
  location: Locationinfo;
  domains: [];
  asn: Asn;
  isp: string;
}
