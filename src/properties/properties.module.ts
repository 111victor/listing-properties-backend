import { Module } from "@nestjs/common";
import { PropertiesService } from "./services/properties.service";
import { PropertiesController } from "./controllers/properties.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Properties } from "./entities/property.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Properties])],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
