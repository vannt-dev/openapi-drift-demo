import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  list() {
    return [];
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() body: Record<string, unknown>) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return { id, ...body };
  }

  // drift 1: served, not in openapi.yaml
  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id };
  }
}
