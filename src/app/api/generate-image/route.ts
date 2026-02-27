import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imagePrompts = [
  {
    name: 'hero-lockers',
    prompt: 'Modern smart self-storage lockers in a premium tech facility, clean minimalist design, electric green accent lighting, professional photography, high quality, 8k',
    size: '1344x768' as const,
  },
  {
    name: 'small-locker-backpack',
    prompt: 'Stylish backpack and small bags in a modern storage locker, soft lighting, clean background, product photography, high quality',
    size: '1024x1024' as const,
  },
  {
    name: 'medium-locker-suitcase',
    prompt: 'Modern suitcases and carry-on bags in a smart storage locker, travel photography style, professional lighting, high quality',
    size: '1024x1024' as const,
  },
  {
    name: 'large-locker-sports',
    prompt: 'Sports equipment including golf clubs and gear in a large storage locker, athletic photography, dynamic composition, high quality',
    size: '1024x1024' as const,
  },
  {
    name: 'secure-locker',
    prompt: 'Secure digital keypad lock on a modern storage locker, close-up shot, metallic finish, professional product photography, high quality',
    size: '1024x1024' as const,
  },
  {
    name: 'traveler-using-locker',
    prompt: 'Diverse traveler using a smart storage locker at a train station, happy expression, modern facility, lifestyle photography, high quality',
    size: '1344x768' as const,
  },
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { index } = body;

    if (typeof index !== 'number' || index < 0 || index >= imagePrompts.length) {
      return NextResponse.json(
        { error: 'Invalid image index' },
        { status: 400 }
      );
    }

    const imageConfig = imagePrompts[index];
    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt: imageConfig.prompt,
      size: imageConfig.size,
    });

    if (!response.data || !response.data[0] || !response.data[0].base64) {
      throw new Error('Invalid response from image generation API');
    }

    const imageBase64 = response.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');
    const filename = `${imageConfig.name}.png`;
    const filepath = path.join(outputDir, filename);

    fs.writeFileSync(filepath, buffer);

    return NextResponse.json({
      success: true,
      imageUrl: `/images/${filename}`,
      name: imageConfig.name,
      prompt: imageConfig.prompt,
      size: imageConfig.size,
    });
  } catch (error: any) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate image' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    availableImages: imagePrompts.map((img, idx) => ({
      index: idx,
      name: img.name,
      prompt: img.prompt,
      size: img.size,
    })),
  });
}
