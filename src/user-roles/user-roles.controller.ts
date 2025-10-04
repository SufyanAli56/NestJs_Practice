import { Controller, UseGuards,Get } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enum';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdmindata(){
        return { message:'only Admin can access'}
    }
    @Get('user-data')
    getUserdata(){
        return { message :'All user can access'}
    }
}
