import nextDynamic from 'next/dynamic';

const QuizStep1 = nextDynamic(() => import('@/components/quiz/QuizStep1'));
const QuizStep2 = nextDynamic(() => import('@/components/quiz/QuizStep2'));
const QuizStep3 = nextDynamic(() => import('@/components/quiz/QuizStep3'));
const QuizStep4 = nextDynamic(() => import('@/components/quiz/QuizStep4'));
const QuizStep5 = nextDynamic(() => import('@/components/quiz/QuizStep5'));
const QuizStep6 = nextDynamic(() => import('@/components/quiz/QuizStep6'));
const QuizStep7 = nextDynamic(() => import('@/components/quiz/QuizStep7'));
const QuizStep8 = nextDynamic(() => import('@/components/quiz/QuizStep8'));
const QuizStep9 = nextDynamic(() => import('@/components/quiz/QuizStep9'));
const QuizStep10 = nextDynamic(() => import('@/components/quiz/QuizStep10'));
const QuizStep11 = nextDynamic(() => import('@/components/quiz/QuizStep11'));
const QuizStep12 = nextDynamic(() => import('@/components/quiz/QuizStep12'));
const QuizStep13 = nextDynamic(() => import('@/components/quiz/QuizStep13'));
const QuizStep14 = nextDynamic(() => import('@/components/quiz/QuizStep14'));
const QuizStep15 = nextDynamic(() => import('@/components/quiz/QuizStep15'));
const QuizStep16 = nextDynamic(() => import('@/components/quiz/QuizStep16'));
const QuizStep17 = nextDynamic(() => import('@/components/quiz/QuizStep17'));
const QuizStep18 = nextDynamic(() => import('@/components/quiz/QuizStep18'));
const QuizStep19 = nextDynamic(() => import('@/components/quiz/QuizStep19'));
const QuizStep20 = nextDynamic(() => import('@/components/quiz/QuizStep20'));
const QuizStep21 = nextDynamic(() => import('@/components/quiz/QuizStep21'));
const QuizStep22 = nextDynamic(() => import('@/components/quiz/QuizStep22'));
const QuizStep23 = nextDynamic(() => import('@/components/quiz/QuizStep23'));
const QuizLoading = nextDynamic(() => import('@/components/quiz/QuizLoading'));

export const dynamic = "force-dynamic";

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const step = parseInt(id);

    switch (step) {
        case 1:
            return <QuizStep1 />;
        case 2:
            return <QuizStep2 />;
        case 3:
            return <QuizStep3 />;
        case 4:
            return <QuizStep4 />;
        case 5:
            return <QuizStep5 />;
        case 6:
            return <QuizStep6 />;
        case 7:
            return <QuizStep7 />;
        case 8:
            return <QuizStep8 />;
        case 9:
            return <QuizStep9 />;
        case 10:
            return <QuizStep10 />;
        case 11:
            return <QuizStep11 />;
        case 12:
            return <QuizStep12 />;
        case 13:
            return <QuizStep13 />;
        case 14:
            return <QuizStep14 />;
        case 15:
            return <QuizStep15 />;
        case 16:
            return <QuizStep16 />;
        case 17:
            return <QuizStep17 />;
        case 18:
            return <QuizStep18 />;
        case 19:
            return <QuizStep19 />;
        case 20:
            return <QuizStep20 />;
        case 21:
            return <QuizStep21 />;
        case 22:
            return <QuizStep22 />;
        case 23:
            return <QuizStep23 />;
        case 24:
            return <QuizLoading />;
        default:
            return <div>Paso no encontrado</div>;
    }
}
