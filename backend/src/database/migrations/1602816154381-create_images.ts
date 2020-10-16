import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602816154381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(new Table ({
            name: "images",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'id_orphanage',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['id_orphanage'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'orphanages',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.dropTable("images");
    }

}
