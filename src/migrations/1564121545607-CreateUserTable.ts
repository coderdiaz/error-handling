import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1564121545607 implements MigrationInterface {
  private table = new Table({
    name: "User",
    columns: [
      {
        name: "id",
        type: "uuid",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "uuid",
      },
      {
        name: "name",
        type: "varchar",
        length: "100",
        isNullable: false,
      },
      {
        name: "lastName",
        type: "varchar",
        length: "100",
        isNullable: false,
      },
      {
        name: "username",
        type: "varchar",
        length: "50",
        isNullable: true,
      },
      {
        name: "email",
        type: "varchar",
        length: "255",
        isNullable: false,
        isUnique: true,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.table);
  }
}
