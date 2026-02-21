import { Grid, Typography, Box, Paper } from "@mui/material";

export default function About() {
  return (
    <Box>
      <Typography component={"p"}>
        <strong>Автоскло Зелена</strong> — це спеціалізований сервіс із продажу,
        встановлення та ремонту автомобільного скла для всіх марок автомобілів.
        Ми працюємо на ринку автоскла вже багато років і за цей час здобули довіру
        клієнтів завдяки професійному підходу, якісним матеріалам та сучасному обладнанню.
      </Typography>

      <Typography component={"p"}>
        Наша команда складається з кваліфікованих майстрів, які регулярно проходять
        навчання та підвищують свою кваліфікацію. Ми використовуємо тільки сертифіковане
        скло та витратні матеріали від перевірених виробників, що гарантує довговічність
        та безпечну експлуатацію автомобіля після встановлення.
      </Typography>

      <Typography component={"p"}>
        Ми обслуговуємо як приватних клієнтів, так і корпоративні автопарки,
        забезпечуючи швидке виконання робіт, точність монтажу та індивідуальний підхід
        до кожного замовлення.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>
              Наша місія
            </Typography>
            <Typography variant="body2">
              Забезпечити водіїв якісним та надійним автосклом, яке гарантує
              безпеку на дорозі та комфорт під час керування автомобілем.
            </Typography>
          </Paper>
        </Grid>

        <Grid item size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>
              Наш підхід
            </Typography>
            <Typography variant="body2">
              Ми поєднуємо досвід, сучасні технології та індивідуальний сервіс,
              щоб кожен клієнт отримував найкращий результат.
            </Typography>
          </Paper>
        </Grid>

        <Grid item size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>
              Наша мета
            </Typography>
            <Typography variant="body2">
              Стати надійним партнером для кожного автовласника у питаннях
              обслуговування та заміни автомобільного скла.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

    </Box>
  );
}