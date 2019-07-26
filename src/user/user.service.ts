import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { IUser } from "./interfaces/user.interface";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(attributes): Promise<IUser> {
    return await this.userRepository.save(attributes);
  }

  async find(): Promise<IUser[]> {
    return await this.userRepository.find();
  }

  async findUserByEmail(email: string): Promise<IUser | null> {
    return await this.userRepository.findOne({ email });
  }
}
