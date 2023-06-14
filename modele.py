
def prediction_modele(titre, texte, sujet):

    # model = prediction(titre + texte + sujet)
    predictionModel1 = True
    predictionModel2 = True

    predicition_modele_1 = {
        'fakeOrNot':predictionModel1,
        'RMSE':14564654,
        'MAPE':654654,
        'MAE':777777,
        'R2':0.8555,
        'titleTEST': titre,
        'sujetTEST': sujet,
        'texteTEST': texte
    }
    predicition_modele_2 = {
        'fakeOrNot':predictionModel2,
        'RMSE':16684351,
        'MAPE':64655,
        'MAE':777777,
        'R2':0.87888,
        'titleTEST':"ttt",
        'sujetTEST':"ttt",
        'texteTEST':"ttt"
    }
    all_predictions = [predicition_modele_1, predicition_modele_2]
    return all_predictions

if __name__ == '__main__':
    print("le modele")
