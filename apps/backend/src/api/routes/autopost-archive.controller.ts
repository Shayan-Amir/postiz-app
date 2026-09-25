import { Controller, Get } from '@nestjs/common';
import { GetOrgFromRequest } from '@gitroom/nestjs-libraries/user/org.from.request';
import { Organization } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { AutopostService } from '@gitroom/nestjs-libraries/database/prisma/autopost/autopost.service';

// Not wired into ApiModule on purpose — this is a staging copy for an
// in-progress split of the Autopost list endpoint into its own module,
// kept here until the migration finishes. Not live, not routed.
@ApiTags('Autopost')
@Controller('/autopost')
export class AutopostArchiveController {
  constructor(private _autopostsService: AutopostService) {}

  @Get('/')
  async getAutoposts(@GetOrgFromRequest() org: Organization) {
    return this._autopostsService.getAutoposts(org.id);
  }
}
