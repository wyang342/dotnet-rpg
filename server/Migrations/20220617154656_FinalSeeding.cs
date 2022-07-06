using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace dotnet_rpg.Migrations
{
    public partial class FinalSeeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "PasswordHash", "PasswordSalt", "Username" },
                values: new object[] { 1, new byte[] { 22, 202, 102, 20, 92, 13, 218, 233, 248, 144, 43, 152, 69, 253, 249, 89, 171, 130, 233, 80, 140, 85, 115, 200, 26, 7, 40, 177, 81, 182, 163, 133, 94, 147, 81, 59, 226, 8, 168, 108, 189, 70, 255, 248, 88, 160, 74, 132, 227, 89, 130, 233, 45, 105, 192, 186, 2, 221, 230, 227, 42, 72, 221, 197 }, new byte[] { 96, 123, 26, 143, 229, 192, 8, 66, 169, 130, 169, 7, 91, 144, 218, 209, 251, 143, 179, 121, 107, 118, 6, 174, 39, 125, 37, 168, 234, 255, 11, 224, 156, 201, 202, 162, 167, 245, 210, 154, 230, 146, 219, 236, 73, 47, 27, 34, 159, 229, 197, 177, 1, 189, 16, 50, 34, 90, 112, 61, 66, 87, 47, 70, 139, 71, 254, 109, 166, 97, 32, 115, 0, 115, 118, 26, 196, 88, 30, 25, 129, 86, 34, 199, 85, 210, 77, 58, 251, 159, 212, 114, 112, 243, 169, 125, 201, 111, 96, 36, 62, 31, 148, 23, 63, 226, 210, 87, 120, 236, 163, 22, 67, 176, 223, 176, 243, 68, 85, 26, 156, 49, 178, 82, 174, 99, 167, 88 }, "User1" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "PasswordHash", "PasswordSalt", "Username" },
                values: new object[] { 2, new byte[] { 22, 202, 102, 20, 92, 13, 218, 233, 248, 144, 43, 152, 69, 253, 249, 89, 171, 130, 233, 80, 140, 85, 115, 200, 26, 7, 40, 177, 81, 182, 163, 133, 94, 147, 81, 59, 226, 8, 168, 108, 189, 70, 255, 248, 88, 160, 74, 132, 227, 89, 130, 233, 45, 105, 192, 186, 2, 221, 230, 227, 42, 72, 221, 197 }, new byte[] { 96, 123, 26, 143, 229, 192, 8, 66, 169, 130, 169, 7, 91, 144, 218, 209, 251, 143, 179, 121, 107, 118, 6, 174, 39, 125, 37, 168, 234, 255, 11, 224, 156, 201, 202, 162, 167, 245, 210, 154, 230, 146, 219, 236, 73, 47, 27, 34, 159, 229, 197, 177, 1, 189, 16, 50, 34, 90, 112, 61, 66, 87, 47, 70, 139, 71, 254, 109, 166, 97, 32, 115, 0, 115, 118, 26, 196, 88, 30, 25, 129, 86, 34, 199, 85, 210, 77, 58, 251, 159, 212, 114, 112, 243, 169, 125, 201, 111, 96, 36, 62, 31, 148, 23, 63, 226, 210, 87, 120, 236, 163, 22, 67, 176, 223, 176, 243, 68, 85, 26, 156, 49, 178, 82, 174, 99, 167, 88 }, "User2" });

            migrationBuilder.InsertData(
                table: "Characters",
                columns: new[] { "Id", "Class", "Defeats", "Defense", "Fights", "HitPoints", "Intelligence", "Name", "Strength", "UserId", "Victories" },
                values: new object[] { 1, 1, 0, 10, 0, 100, 10, "Frodo", 15, 1, 0 });

            migrationBuilder.InsertData(
                table: "Characters",
                columns: new[] { "Id", "Class", "Defeats", "Defense", "Fights", "HitPoints", "Intelligence", "Name", "Strength", "UserId", "Victories" },
                values: new object[] { 2, 2, 0, 5, 0, 100, 20, "Raistlin", 5, 2, 0 });

            migrationBuilder.InsertData(
                table: "CharacterSkills",
                columns: new[] { "CharacterId", "SkillId" },
                values: new object[] { 1, 2 });

            migrationBuilder.InsertData(
                table: "CharacterSkills",
                columns: new[] { "CharacterId", "SkillId" },
                values: new object[] { 2, 1 });

            migrationBuilder.InsertData(
                table: "CharacterSkills",
                columns: new[] { "CharacterId", "SkillId" },
                values: new object[] { 2, 3 });

            migrationBuilder.InsertData(
                table: "Weapons",
                columns: new[] { "Id", "CharacterId", "Damage", "Name" },
                values: new object[] { 1, 1, 20, "The Master Sword" });

            migrationBuilder.InsertData(
                table: "Weapons",
                columns: new[] { "Id", "CharacterId", "Damage", "Name" },
                values: new object[] { 2, 2, 5, "Crystal Wand" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "CharacterSkills",
                keyColumns: new[] { "CharacterId", "SkillId" },
                keyValues: new object[] { 1, 2 });

            migrationBuilder.DeleteData(
                table: "CharacterSkills",
                keyColumns: new[] { "CharacterId", "SkillId" },
                keyValues: new object[] { 2, 1 });

            migrationBuilder.DeleteData(
                table: "CharacterSkills",
                keyColumns: new[] { "CharacterId", "SkillId" },
                keyValues: new object[] { 2, 3 });

            migrationBuilder.DeleteData(
                table: "Weapons",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Weapons",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Characters",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Characters",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
