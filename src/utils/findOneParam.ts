import { IsNumberString } from 'class-validator';

class FindOneParam {
  @IsNumberString()
  id: string;
}

export default FindOneParam;
