import { test, expect } from '@playwright/test';

test('1 - Verificar la Carga de la Página Principal y Explorar la Navegación', async ({ page }) => {
// create a new todo locator
console.log('Verificar la Carga de la Página Principal');

    // Check first item.
    console.log('Verificar carga de página de Inicio');
    await page.goto('https://recreart.netlify.app/');
    await page.getByRole('link', { name: 'Fransisco Oberti 27 - Monte Cristo - Córdoba' })
    await page.getByRole('link', { name: '(351)530-7520' })
    await page.locator('li').filter({ hasText: 'recrearte@gmail.com' })
    await page.locator('#about img').click();
    await page.getByRole('heading', { name: 'Prestamos todo tipo de servicios médicos que garantizan su salud' }).click();
    await page.locator('#owl-demo1').getByRole('button').nth(1).click();
    await page.locator('#owl-demo1').getByRole('button').nth(3).click();
    await page.getByRole('heading', { name: 'Información de Contacto' }).click();
    console.log('check ok');


    // Check second item.
console.log('Explorar página de Inicio');
    await page.getByRole('link', { name: 'Nosotros' }).click();
    await page.pause()
    await page.getByRole('link', { name: 'Servicios' }).click();
    await page.pause()
    await page.locator('#navbarTogglerDemo02').getByRole('link', { name: 'Contacto' }).click();
    await page.pause()
    await page.getByRole('link', { name: 'Inicio (current)' }).click();
    await page.pause()
    await page.close()
    console.log('check ok');

    console.log('Escenario correcto sin errores visibles');


});

test('2 - Sección "Nosotros', async ({ page }) => {
    
    // Check first item.
    console.log('Navegación de sección Nosotros');
    await page.goto('https://recreart.netlify.app/');
    await page.getByRole('link', { name: 'Nosotros' }).click();
    await page.pause()
    await page.getByText('Nosotros Nuestro objetivo es brindar atención psiquiátrica integral y compasiva ').click();
    await page.getByRole('heading', { name: 'Unas palabras sobre nosostros' }).click();
    await page.getByRole('heading', { name: 'Conozca nuestro equipo' }).click();
    await page.locator('.social').first().click();
    console.log('check ok');
    

    // Check second item.
    console.log('Explorar equipo de trabajo');
    await page.getByRole('heading', { name: 'Links' }).click();
    await page.getByRole('link', { name: '' }).nth(1).click();
    await page.pause()
    await page.goto('https://recreart.netlify.app/about');
    await page.pause()
    await page.locator('#people').getByRole('link', { name: '' }).click();
    await page.pause()
    await page.goto('https://recreart.netlify.app/about');
    await page.pause()
    console.log('check ok');

    await page.close()
console.log('Escenario correcto - no presenta errores')
})

test('3 - Sección "Servicios', async ({ page }) => {

    // Check first item.
    console.log('Navegación de la sección Servicios');
    await page.goto('https://recreart.netlify.app/');
    await page.getByRole('link', { name: 'Servicios' }).click();

    await page.getByRole('heading', { name: 'Nuestros Servicios' }).click();
    await page.getByText('No dude en saber más sobre nuestro equipo y nuestra empresa en esta página. Esta').click();
    await page.getByRole('link', { name: 'Psiquiatria' }).click();
    await page.pause()
    console.log('check ok');

    // Check second item.
    console.log('Explorar Servicios');
    await page.getByRole('heading', { name: 'Psiquiatria' }).click();
    await page.getByText('Proporciona terapia, medicación, asesoramiento y apoyo a los pacientes y sus fam').click();
    await page.locator('img').click();
    await page.getByRole('heading', { name: 'Amo mi profesión' }).click();
    await page.getByText('A lo largo de mi vida he desarrollado un nuevo concepto de la psiquiatría y la s').click();
    await page.getByRole('heading', { name: 'Me encanta la gente y soy apasionada de la psiquiatría' }).click();
    await page.getByRole('link', { name: 'Servicios' }).click();
    await page.pause()
    await page.locator('i').nth(4).click();
    console.log('check ok');

    await page.close()
    console.log('Escenario correcto - no presenta errores')
})


test('4 - Sección "Servicios', async ({ page }) => {

// Check first item.
console.log('Navegación de la sección Contacto');
await page.goto('https://recreart.netlify.app/');
await page.locator('#navbarTogglerDemo02').getByRole('link', { name: 'Contacto' }).click();
await page.pause()
await page.getByRole('heading', { name: 'Contacto', exact: true }).click();
await page.getByText('No dude en saber más sobre nuestro equipo y nuestra empresa en esta página. Esta').click();
await page.getByRole('heading', { name: 'Email' }).click();
await page.getByRole('heading', { name: 'Información de Contacto' }).click();
console.log('check ok');

// Check second item.
console.log('Explorar Contacto');
await page.getByPlaceholder('Name').click();
await page.getByPlaceholder('Name').fill('655656');
await page.getByPlaceholder('Name').press('Tab');
await page.locator('form').filter({ hasText: 'Enviar' }).getByPlaceholder('Email').click();
await page.locator('form').filter({ hasText: 'Enviar' }).getByPlaceholder('Email').fill('989+8952');
await page.locator('form').filter({ hasText: 'Enviar' }).getByPlaceholder('Email').press('Tab');
await page.getByPlaceholder('Phone Number').fill('asdasdasd');
await page.getByPlaceholder('Phone Number').press('Tab');
await page.getByPlaceholder('Message').click();
await page.getByPlaceholder('Message').fill('*********');
await page.getByPlaceholder('Message').click();
await page.getByRole('link', { name: 'recrearte309' }).first().click();
await page.pause()
await page.goto('https://recreart.netlify.app/contact');
await page.pause()
await page.getByRole('link', { name: '' })
await page.getByRole('link', { name: '' })
console.log('check ok');

// Check third item.
console.log('Verificar Formulario');

await page.getByPlaceholder('Name').click();
await page.getByPlaceholder('Name').click();
await page.getByPlaceholder('Name').fill('ejemplo');
await page.getByPlaceholder('Name').press('Tab');
await page.locator('form').filter({ hasText: 'Enviar' }).getByPlaceholder('Email').fill('ejemplo@gmail.com');
await page.locator('form').filter({ hasText: 'Enviar' }).getByPlaceholder('Email').press('Tab');
await page.getByPlaceholder('Phone Number').fill('65214788asdasda');
await page.getByPlaceholder('Message').click();
await page.getByPlaceholder('Message').fill('asdasdas');
await page.getByRole('button', { name: 'Enviar' }).click();
await page.pause()
await page.getByLabel('Tu dirección de correo electrónico').click();
await page.getByLabel('Tu dirección de correo electrónico').fill('thetestauto@gmail.com');
await page.getByLabel('Tu dirección de correo electrónico').press('Tab');
await page.getByLabel('Confirma correo electrónico *').fill('thetestauto@gmail.com');
await page.getByLabel('Confirma correo electrónico *').press('Tab');
await page.getByLabel('Apellido y Nombre *').fill('es un test');
await page.getByLabel('Número de Celular *').click();
await page.getByLabel('Número de Celular *').fill('9595959595959595');
await page.getByLabel('Psicología').click();
await page.getByRole('button', { name: 'Enviar' }).click();
await page.pause()
await page.getByText('Se registró tu respuesta').click();
console.log('check ok');

// Check fourth item.
console.log('Verificar formulario de Novedades');

await page.goto('https://recreart.netlify.app/contact');
await page.getByRole('contentinfo').getByPlaceholder('Email').click();
await page.getByRole('contentinfo').getByPlaceholder('Email').fill('thetestauto@gmail.com');
await page.getByRole('contentinfo').getByRole('button').click();
await page.getByText('Para completar este formulario, debes acceder a tu cuenta. Tu identidad no se da').click();
console.log('check ok');

await page.close()
console.log('Escenario correcto - no presenta errores')

})