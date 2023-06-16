
def prediction_modele(titre, texte):

    # model = prediction(titre + texte + sujet)
    predictionModel1 = True
    predictionModel2 = False
    predictionModel3 = True
    predictionModel4 = False
    predictionModel5 = True


    predicition_modele_1 = {
        'fakeOrNot':predictionModel1,
        'RMSE':14564654,
        'MAPE':654654,
        'MAE':777777,
        'R2':0.8555,
        'titleTEST':titre,
        'sujetTEST':"sujet",
        'texteTEST':texte
    }
    predicition_modele_2 = {
        'fakeOrNot':predictionModel2,
        'RMSE':16684351,
        'MAPE':64655,
        'MAE':777777,
        'R2':0.87888,
        'titleTEST':titre,
        'sujetTEST':"sujet",
        'texteTEST':texte
    }
    predicition_modele_3 = {
        'fakeOrNot':predictionModel3,
        'RMSE':9466261651615,
        'MAPE':5445,
        'MAE':7894,
        'R2':0.9845,
        'titleTEST':titre,
        'sujetTEST':"sujet",
        'texteTEST':texte
    }
    predicition_modele_4 = {
        'fakeOrNot':predictionModel4,
        'RMSE':9466261651615,
        'MAPE':5445,
        'MAE':7894,
        'R2':0.9845,
        'titleTEST':titre,
        'sujetTEST':"sujet",
        'texteTEST':texte
    }
    predicition_modele_5 = {
        'fakeOrNot':predictionModel5,
        'RMSE':9466261651615,
        'MAPE':5445,
        'MAE':7894,
        'R2':0.9845,
        'titleTEST':titre,
        'sujetTEST':"sujet",
        'texteTEST':texte
    }
    all_predictions = [predicition_modele_1, predicition_modele_2, predicition_modele_3, predicition_modele_4, predicition_modele_5 ]
    return all_predictions

if __name__ == '__main__':
    print("le modele")
